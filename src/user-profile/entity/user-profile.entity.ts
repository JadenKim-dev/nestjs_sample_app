import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Student } from './student.entity';

@Entity({
  name: 'user_profile',
  schema: 'public',
})
export class UserProfile extends BaseEntity {
  @PrimaryColumn()
  studentName: string;

  @IsOptional({
    groups: ['readMany', 'upsert', 'search'],
  })
  @ApiHideProperty()
  @OneToOne(() => Student, (student) => student.profile)
  student: Student;

  @Column({ nullable: true, default: null })
  @IsString({
    groups: ['create', 'update', 'readMany', 'upsert', 'search'],
  })
  @IsOptional({
    groups: ['create', 'update', 'readMany', 'upsert', 'search'],
  })
  firstName?: string;

  constructor(partial: Partial<UserProfile>) {
    super();
    Object.assign(this, partial);
  }
}

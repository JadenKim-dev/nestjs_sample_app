import { Type } from 'class-transformer';
import { IsString, IsOptional } from 'class-validator';
import {
  BaseEntity,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  Relation,
} from 'typeorm';
import { UserProfile } from './user-profile.entity';

@Entity({
  name: 'students',
  schema: 'public',
})
export class Student extends BaseEntity {
  @Index({ unique: true })
  @PrimaryColumn()
  @IsString({ groups: ['create', 'update', 'readMany', 'upsert', 'search'] })
  @IsOptional({ groups: ['create', 'update', 'readMany', 'upsert', 'search'] })
  username: string;

  @Type((_type) => UserProfile)
  @OneToOne((_type) => UserProfile, (profile) => profile.studentName, {
    eager: true,
    nullable: false,
    cascade: true,
  })
  @JoinColumn()
  profile: Relation<UserProfile>;
}

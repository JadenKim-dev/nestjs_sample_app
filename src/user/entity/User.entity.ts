import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsOptional, IsNumber, IsString } from 'class-validator';

import { Type } from 'class-transformer';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @IsNumber({}, { groups: ['search'] })
  @Type(() => Number)
  id: number;

  @Column()
  @IsString({ groups: ['search', 'update', 'readMany'] })
  @IsOptional({ groups: ['search', 'update', 'readMany'] })
  username: string;

  @Column()
  email: string;

  @Column()
  @IsString({ groups: ['search'] })
  createdAt: Date;
}

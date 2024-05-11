import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString } from 'class-validator';
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString({ always: true })
  username: string;

  @Column()
  @IsString({ always: true })
  email: string;
}
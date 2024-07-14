import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Group } from './group.entity';

@Entity('pricetypes')
export class PriceType extends BaseEntity {
  @ApiProperty({ description: 'Unique identifier of the entity' })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'group_id' })
  @IsOptional({ groups: ['update', 'readMany'] })
  groupId: number;

  @ManyToOne(() => Group, (group) => group.pricetypes)
  @JoinColumn({ name: 'group_id', referencedColumnName: 'id' })
  group: Group;
}

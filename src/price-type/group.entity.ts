import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PriceType } from './price-type.entity';

@Entity('groups')
export class Group extends BaseEntity {
  @ApiProperty({ description: 'Unique identifier of the entity' })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text' })
  note: string;

  @OneToMany(() => PriceType, (priceType) => priceType.group, { eager: true })
  pricetypes: PriceType[];
}

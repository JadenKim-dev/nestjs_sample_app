import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceType } from './price-type.entity';
import { PriceTypeController } from './price-type.controller';
import { PriceTypeService } from './price-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([PriceType])],
  controllers: [PriceTypeController],
  providers: [PriceTypeService],
})
export class PriceTypeModule {}

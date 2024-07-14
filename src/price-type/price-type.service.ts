import { CrudService } from '@nestjs-library/crud';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PriceType } from './price-type.entity';

@Injectable()
export class PriceTypeService extends CrudService<PriceType> {
  constructor(@InjectRepository(PriceType) repository: Repository<PriceType>) {
    super(repository);
  }
}

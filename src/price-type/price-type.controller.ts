import { Crud } from '@nestjs-library/crud';
import { ApiTags } from '@nestjs/swagger';
import { PriceTypeService } from './price-type.service';
import { PriceType } from './price-type.entity';
import { Controller } from '@nestjs/common';

@ApiTags('price-type')
@Crud({
  entity: PriceType,
  logging: true,
  routes: {
    update: {},
  },
})
@Controller('price-type')
export class PriceTypeController {
  constructor(public crudService: PriceTypeService) {}
}

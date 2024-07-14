import { IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePriceTypeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  groupId: number;

  // .. more attributes
}

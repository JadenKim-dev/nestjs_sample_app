import { ApiProperty } from '@nestjs/swagger';

export class UserCreateRequestDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;
}

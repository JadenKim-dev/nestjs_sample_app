import { ApiProperty } from '@nestjs/swagger';

export class UserUpdateRequestDto {
  @ApiProperty()
  username: string;
}

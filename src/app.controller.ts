import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserCreateRequestDto } from './user/dto/user-create.request.dto';
import { UserUpdateRequestDto } from './user/dto/user-update.request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() body: UserCreateRequestDto | UserUpdateRequestDto): string {
    return this.appService.getHello();
  }
}

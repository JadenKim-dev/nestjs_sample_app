import { Controller } from '@nestjs/common';
import { Crud } from '@nestjs-library/crud';
import { User } from './entity/User.entity';
import { UserService } from './user.service';

@Crud({ entity: User, logging: true })
@Controller('user')
export class UserController {
  constructor(public readonly crudService: UserService) {}
}

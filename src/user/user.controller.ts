import { Controller } from '@nestjs/common';
import { Crud, CrudController, CrudService } from '@nestjs-library/crud';
import { User } from './entity/User.entity';
import { UserService } from './user.service';
import { UserCreateRequestDto } from './dto/user-create.request.dto';
import { UserUpdateRequestDto } from './dto/user-update.request.dto';

@Crud({
  entity: User,
  logging: true,
  routes: {
    search: {
      paginationType: 'offset',
    },
    readMany: {
      paginationType: 'offset',
    },
    create: {
      swagger: {
        body: UserCreateRequestDto,
      },
    },
    update: {
      swagger: {
        body: UserUpdateRequestDto,
      },
    },
  },
})
@Controller('user')
export class UserController {
  constructor(public crudService: UserService) {}
}

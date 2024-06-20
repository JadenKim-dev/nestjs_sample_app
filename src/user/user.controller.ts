import { Controller } from '@nestjs/common';
import { Crud, CrudService } from '@nestjs-library/crud';
import { User } from './entity/User.entity';
import { UserCreateRequestDto } from './dto/user-create.request.dto';
import { UserUpdateRequestDto } from './dto/user-update.request.dto';
import { ApiTags, PickType } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('user')
@Crud({
  entity: User,
  logging: true,
  routes: {
    search: {
      paginationType: 'cursor',
    },
    readMany: {
      paginationType: 'cursor',
    },
    create: {
      swagger: {
        body: PickType(UserCreateRequestDto, ['username']),
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

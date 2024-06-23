import { Crud, CrudService } from '@nestjs-library/crud';
import { Controller } from '@nestjs/common';
import { UserProfile } from './entity/user-profile.entity';
import { UserProfileService } from './user-profile.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user-profile')
@Controller('user-profile')
@Crud({
  entity: UserProfile,
  logging: true,
})
export class UserProfileController {
  constructor(public crudService: UserProfileService) {}
}

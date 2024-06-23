import { CrudService } from '@nestjs-library/crud';
import { Injectable } from '@nestjs/common';
import { UserProfile } from './entity/user-profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserProfileService extends CrudService<UserProfile> {
  constructor(
    @InjectRepository(UserProfile) repository: Repository<UserProfile>,
  ) {
    super(repository);
  }
}

import { CrudService } from '@nestjs-library/crud';
import { Injectable } from '@nestjs/common';
import { User } from './entity/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends CrudService<User> {
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository);
  }
}

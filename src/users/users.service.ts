import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { InjectModel} from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  createUser() {
    return 1;
  }

  async deleteUser() {}

  async createAdmin() {}

  async deleteAdmin() {}
}

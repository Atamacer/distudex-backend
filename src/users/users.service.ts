import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  createUser() {
    return 1;
  }

  async deleteUser() {}

  async createAdmin() {}

  async deleteAdmin() {}
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  addUser() {
    return 1;
  }

  async deleteUser() {}

  async addAdmin() {}

  async deleteAdmin() {}
}

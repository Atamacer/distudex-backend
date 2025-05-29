import { Injectable } from '@nestjs/common';
import { AuthUserDto } from './dto/authUser.dto';
import { UsersService } from '../users/users.service';
import { ComboUserDto } from './dto/comboUserDto';
import { AuthAdminDto } from './dto/authAdmin.dto';
import { ComboAdminDto } from './dto/comboAdminDto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  private readonly data = 1;

  async registerUser(authUserDto: AuthUserDto) {
    const comboUserDto: ComboUserDto = {
      ...authUserDto,
      role: 'user',
    };

    return await this.userService.createUser(comboUserDto);
  }

  async registerAdmin(authAdminDto: AuthAdminDto) {
    const comboAdminDto: ComboAdminDto = {
      ...authAdminDto,
      role: 'admin',
    };

    return await this.userService.createAdmin(comboAdminDto);
  }

  login(): number {
    return this.data;
  }

  async validateAdmin(
    firstName: string,
    lastName: string,
    patronymic: string,
    serviceNumber: string,
    password: string,
  ) {
    const user = await this.userService.findByServiceNumber(serviceNumber);

    if (user != null) {
      if (user.role === 'admin') {
        console.log(
          await this.userService.verifyPassword(user.password, password),
        );
        if (
          (await this.userService.verifyPassword(user.password, password)) &&
          patronymic === user.patronymic &&
          lastName === user.lastName &&
          firstName === user.firstName
        ) {
          return true;
        }
      }
    }
    return false;
  }
}

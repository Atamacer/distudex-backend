import { Injectable } from '@nestjs/common';
import { AuthUserDto } from './dto/authUser.dto';
import { UsersService } from '../users/users.service';
import { ComboUserDto } from './dto/comboUserDto';
import { AuthAdminDto } from './dto/authAdmin.dto';
import { ComboAdminDto } from './dto/comboAdminDto';
import { JwtService } from '@nestjs/jwt';
import { LoginInterface } from '../jwt/interfaces/login.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

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

  async login(user: LoginInterface) {
    const payload = {
      serviceNumber: user.serviceNumber,
      password: user.password,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateAdmin(serviceNumber: string, password: string) {
    const user = await this.userService.findByServiceNumber(serviceNumber);

    if (user != null) {
      if (user.role === 'admin') {
        if (await this.userService.verifyPassword(user.password, password)) {
          return true;
        }
      }
    }
    return false;
  }
}

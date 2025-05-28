import { Injectable } from '@nestjs/common';
import { AuthUserDto } from './dto/authUser.dto';
import { UsersService } from '../users/users.service';
import { ComboUserDto } from './dto/comboUserDto';

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

  login(): number {
    return this.data;
  }
}

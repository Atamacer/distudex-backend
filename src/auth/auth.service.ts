import { Injectable } from '@nestjs/common';
import { AuthUserDto } from './dto/authUser.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  private readonly data = 1;

  registerUser(authUserDto: AuthUserDto) {
    return authUserDto;
  }

  login(): number {
    return this.data;
  }
}

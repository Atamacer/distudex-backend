import { Injectable } from '@nestjs/common';
import { AuthUserDto } from './dto/authUser.dto';
// import { AuthUserModel } from './auth.model';
// import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  private readonly data = 1;

  registerUser(authUserDto: AuthUserDto) {
    return authUserDto;
  }

  login(): number {
    return this.data;
  }
}

import { Body, Injectable } from '@nestjs/common';
import { AuthDtoAdmin } from './dto/auth.dto';

@Injectable()
export class AuthService {
  loginAdmin(@Body() dto: AuthDtoAdmin) {
    return '1';
  }
}

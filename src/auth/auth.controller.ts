import { Controller, HttpCode, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @HttpCode(200)
  @Post('register')
  register() {
    return 1;
  }

  @HttpCode(200)
  @Post('login')
  login() {
    return 1;
  }
}

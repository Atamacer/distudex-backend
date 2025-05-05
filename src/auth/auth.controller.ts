import { Controller, HttpCode, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @HttpCode(200)
  @Post('loginUser')
  loginUser() {
    return 1;
  }

  @HttpCode(200)
  @Post('loginAdmin')
  loginAdmin() {
    return 2;
  }
}

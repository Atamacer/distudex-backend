import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/authUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('registerUser')
  registerUser(@Body() authUserDto: AuthUserDto) {
    return this.authService.registerUser(authUserDto);
  }

  @HttpCode(200)
  @Post('login')
  login(): number {
    return this.authService.login();
  }
}

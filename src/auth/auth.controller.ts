import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/authUser.dto';
import { AuthAdminDto } from './dto/authAdmin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('registerUser')
  registerUser(@Body() authUserDto: AuthUserDto) {
    return this.authService.registerUser(authUserDto);
  }

  @HttpCode(200)
  @Post('registerAdmin')
  registerAdmin(@Body() authAdminDto: AuthAdminDto) {
    return this.authService.registerAdmin(authAdminDto);
  }

  @HttpCode(200)
  @Post('login')
  login() {
    return this.authService.validateAdmin('dan', 'kop', 'vya', '108', '123');
  }
}

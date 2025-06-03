import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthAdminDto } from './dto/authAdmin.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoginInterface } from '../jwt/interfaces/login.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(201)
  @Post('registerAdmin')
  registerAdmin(@Body() authAdminDto: AuthAdminDto) {
    return this.authService.registerAdmin(authAdminDto);
  }

  @UseGuards(AuthGuard('local'))
  @HttpCode(200)
  @Post('login')
  async login(@Request() req: LoginInterface) {
    return this.authService.login(req);
  }
}

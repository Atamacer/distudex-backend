import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email', // Указываем кастомное поле для логина
      passwordField: 'password',
      // Для передачи request в validate
      // passReqToCallback: true
    });
  }

  async validate(
    firstName: string,
    lastName: string,
    patronymic: string,
    serviceNumber: string,
    password: string,
  ): Promise<any> {
    const user = await this.authService.validateAdmin(
      firstName,
      lastName,
      patronymic,
      serviceNumber,
      password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user; // Будет сохранено в req.user
  }
}

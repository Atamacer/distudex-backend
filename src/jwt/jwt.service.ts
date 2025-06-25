import { Injectable } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { LoginInterface } from './interfaces/login.interface';

@Injectable()
export class JwtService {
  constructor(private readonly nestJwtService: NestJwtService) {}

  createPayload(user: LoginInterface) {
    return {
      serviceNumber: user.serviceNumber,
      password: user.password,
    };
  }

  generateAccessToken(user: LoginInterface) {
    const payload = this.createPayload(user);
    return {
      accessToken: this.nestJwtService.sign(payload),
    };
  }
}

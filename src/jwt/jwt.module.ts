import { Module } from '@nestjs/common';
import { CustomJwtService } from './jwt.service';
import { JwtController } from './jwt.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [CustomJwtService],
  controllers: [JwtController],
  exports: [CustomJwtService],
  imports: [
    PassportModule,
    NestJwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRES_IN'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class JwtModule {}

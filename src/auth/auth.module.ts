import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { User, UserSchema } from '../schemas/user.schema';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule as CustomJwtModule } from '../jwt/jwt.module';
import { LocalStrategy } from '../jwt/strategies/local.strategy';
import { JwtStrategy } from '../jwt/strategies/jwt.strategy';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  imports: [
    UsersModule,
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
        collection: 'Users',
      },
    ]),
    ConfigModule.forRoot(),
    PassportModule,
    CustomJwtModule,
  ],
})
export class AuthModule {}

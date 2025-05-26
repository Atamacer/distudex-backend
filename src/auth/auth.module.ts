import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthUserService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { User, UserSchema } from '../users/users.model';

@Module({
  providers: [AuthUserService],
  controllers: [AuthController],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
        collection: 'Users',
      },
    ]),
    ConfigModule.forRoot(),
  ],
})
export class AuthModule {}

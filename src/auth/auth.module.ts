import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { UserSchema, User } from '../schemas/user.schema';

@Module({
  providers: [AuthService],
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

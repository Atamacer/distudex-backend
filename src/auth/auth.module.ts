import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthUserService } from './auth.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [AuthUserService],
  controllers: [AuthController],
  imports: [
    MongooseModule.forRoot('mongodb://admin:admin@localhost:27017/'),
    ConfigModule.forRoot(),
  ],
})
export class AuthModule {}

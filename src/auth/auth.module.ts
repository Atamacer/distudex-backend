import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [MongooseModule.forRoot('mongodb://localhost/')],
})
export class AuthModule {}

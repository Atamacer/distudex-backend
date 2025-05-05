import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthUserService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AuthController],
  providers: [AuthUserService],
})
export class AppModule {}

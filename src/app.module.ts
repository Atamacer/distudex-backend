import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthUserService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TestsModule } from './tests/tests.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://admin:admin@localhost:27017/'),
    TestsModule,
  ],
  controllers: [AuthController],
  providers: [AuthUserService],
})
export class AppModule {}

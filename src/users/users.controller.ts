import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateAdminDto } from './dto/admin.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @HttpCode(201)
  @Post('createAdmin')
  async createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.userService.createAdmin(createAdminDto);
  }

  @HttpCode(200)
  @Delete('deleteAdmin')
  async deleteAdmin(@Query('serviceNumber') serviceNumber: unknown) {
    const ServiceNumber =
      typeof serviceNumber === 'string' ? serviceNumber : String(serviceNumber);

    return this.userService.deleteAdmin('serviceNumber', ServiceNumber);
  }
}

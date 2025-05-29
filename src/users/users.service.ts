import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { CreateUserDto } from './dto/user.dto';
import { CreateAdminDto } from './dto/admin.dto';
import { argon2id, hash, verify } from 'argon2';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(createUserDto: CreateUserDto) {
    try {
      const newUser = new this.userModel({
        ...createUserDto,
      });

      return await newUser.save();
    } catch (error) {
      console.error(error);
    }
  }

  async createAdmin(createAdminDto: CreateAdminDto) {
    try {
      const hashPassword: string = await this.hashPass(createAdminDto.password);
      console.log(hashPassword.length)

      const newAdmin = new this.userModel({
        ...createAdminDto,
        password: hashPassword,
      });

      return await newAdmin.save();
    } catch (error) {
      console.error(error);
    }
  }

  async deleteUser(field: string = 'serviceNumber', value: string) {
    const result = await this.userModel.deleteOne({ [field]: value }).exec();
    return { deletedCount: result.deletedCount };
  }

  async findByServiceNumber(serviceNumber: string) {
    return await this.userModel.findOne({ serviceNumber }).exec();
  }

  async hashPass(password: string) {
    return await hash(password, {
      type: argon2id,
      timeCost: 10,
      memoryCost: 4096,
      parallelism: 1,
      hashLength: 32,
      raw: false,
    });
  }

  async verifyPassword(
    passwordHash: string,
    password: string,
  ): Promise<boolean> {
    try {
      return await verify(passwordHash, password);
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

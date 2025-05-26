import { IsString } from 'class-validator';

export class AuthAdminDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  patronymic: string;

  @IsString()
  serviceNumber: string;

  @IsString()
  password: string;
}

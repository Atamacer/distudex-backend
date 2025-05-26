import { IsString } from 'class-validator';

export class AuthAdminDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly patronymic: string;

  @IsString()
  readonly serviceNumber: string;

  @IsString()
  readonly password: string;
}

import { IsString } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly patronymic: string;

  @IsString()
  readonly serviceNumber: string;

  @IsString()
  password: string;

  @IsString()
  readonly role: string;
}

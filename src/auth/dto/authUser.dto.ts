import { IsString } from 'class-validator';

export class AuthUserDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly patronymic: string;

  @IsString()
  readonly serviceNumber: string;
}

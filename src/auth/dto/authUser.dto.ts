import { IsString } from 'class-validator';

export class AuthUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  patronymic: string;

  @IsString()
  serviceNumber: string;
}

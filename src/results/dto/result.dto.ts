import { IsNumber, IsString } from 'class-validator';

export class ResultDto {
  @IsString()
  readonly fullName: string;

  @IsString()
  readonly serviceNumber: string;

  @IsNumber()
  readonly points: number;

  @IsString()
  readonly belongs: string;
}

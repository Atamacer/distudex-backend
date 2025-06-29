import { IsString } from 'class-validator';

export class CreateExamDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;
}

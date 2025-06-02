import { IsArray, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly correctAnswer: string;

  @IsArray()
  readonly wrongAnswer: string[];

  @IsString()
  readonly _id: string;
}

import { IsString, IsArray } from 'class-validator';

export class TaskDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly correctAnswer: string;

  @IsArray()
  readonly wrongAnswer: string[];
}

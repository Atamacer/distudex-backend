import { IsString } from 'class-validator';

export class DeleteExamDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;
}

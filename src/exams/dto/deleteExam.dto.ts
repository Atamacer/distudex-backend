import { IsString } from 'class-validator';

export class deleteExamDto {
  @IsString()
  readonly name: string;
}

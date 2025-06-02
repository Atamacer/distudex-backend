import { IsString } from 'class-validator';

export class GetTaskDto {
  @IsString()
  readonly name: string;
}

import { IsString } from 'class-validator';

export class DeleteTaskByNameDto {
  @IsString()
  readonly name: string;
}

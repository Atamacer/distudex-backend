import { IsString } from 'class-validator';

export class DeleteTaskByIdDto {
  @IsString()
  readonly id: string;
}

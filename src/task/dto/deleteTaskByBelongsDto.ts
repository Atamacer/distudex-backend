import { IsString } from 'class-validator';

export class DeleteTaskByBelongsDto {
  @IsString()
  readonly belongs: string;
}

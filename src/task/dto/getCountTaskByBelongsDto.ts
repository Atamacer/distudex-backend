import { IsString } from 'class-validator';

export class GetCountTaskByBelongsDto {
  @IsString()
  readonly belongs: string;
}

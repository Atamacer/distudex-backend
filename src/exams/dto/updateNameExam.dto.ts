import { IsString } from 'class-validator';

export class UpdateNameExamDto {
  @IsString()
  readonly newName: string;

  @IsString()
  readonly oldName: string;
}

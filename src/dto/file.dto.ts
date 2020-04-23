import { IsDefined, IsNumberString } from 'class-validator';
import { Type } from 'class-transformer';

export class FileDto {
  @IsNumberString()
  @Type(() => Number)
  id: number;

  @IsDefined()
  name: string;
}
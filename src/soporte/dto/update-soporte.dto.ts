import { PartialType } from '@nestjs/swagger';
import { CreateSoporteDto } from './create-soporte.dto';

export class UpdateSoporteDto extends PartialType(CreateSoporteDto) {}

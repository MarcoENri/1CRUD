import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoporteService } from './soporte.service';
import { CreateSoporteDto } from './dto/create-soporte.dto';
import { UpdateSoporteDto } from './dto/update-soporte.dto';

@Controller('soporte')
export class SoporteController {
  constructor(private readonly soporteService: SoporteService) {}

  @Post()
  create(@Body() createSoporteDto: CreateSoporteDto) {
    return this.soporteService.createContent(createSoporteDto);
  }

  @Get()
  findAll() {
    return this.soporteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soporteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoporteDto: UpdateSoporteDto) {
    return this.soporteService.update(+id, updateSoporteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soporteService.remove(+id);
  }
}

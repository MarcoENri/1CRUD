import { Injectable } from '@nestjs/common';
import { CreateSoporteDto } from './dto/create-soporte.dto';
import { UpdateSoporteDto } from './dto/update-soporte.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SoporteService {
  constructor(private prisma: PrismaService) {}

  createContent(createSoporteDto: CreateSoporteDto) {
    return 'this action add a new Ticket';
  }

  findAll() {
    return this.prisma.soporte.findMany();
  }

  findOne(id: number) {
    return this.prisma.soporte.findUnique({ where: { id } });
  }

  update(id: number, updateContentDto: UpdateSoporteDto) {
    return this.prisma.soporte.update({
      where: { id },
      data: updateContentDto,
    });
  }

  remove(id: number) {
    return this.prisma.soporte.delete({ where: { id } });
  }
}


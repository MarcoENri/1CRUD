import { Module } from '@nestjs/common';
import { SoporteService } from './soporte.service';
import { SoporteController } from './soporte.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  controllers: [SoporteController],
  providers: [SoporteService],
  imports:[PrismaModule],
})
export class SoporteModule {}

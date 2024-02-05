import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SoporteModule } from './soporte/soporte.module';
import { PrismaService } from './prisma/prisma.service';
@Module({
  imports: [PrismaModule, SoporteModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { FarmService } from './farm.service';
import { FarmController } from './farm.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [FarmController],
  providers: [FarmService, PrismaService],
})
export class FarmModule {}

import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ListController],
  providers: [ListService, PrismaService],
})
export class ListModule {}

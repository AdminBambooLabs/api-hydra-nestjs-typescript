import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { ConfigModule } from "@nestjs/config"
import { PrismaService } from "./database/prisma.service"

@Module({
  imports: [ConfigModule.forRoot(), HealthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

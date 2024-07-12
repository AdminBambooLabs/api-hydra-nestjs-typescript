import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { ConfigModule } from "@nestjs/config"
import { PrismaService } from "./database/prisma.service"
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), HealthModule, UserModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

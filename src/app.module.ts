import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './database/prisma.service';
import { ListModule } from './modules/list/list.module';
import { ListItemModule } from './modules/list-item/list-item.module';
import { PrismaModule } from './database/prisma.module';
import { WsModule } from './modules/ws/ws.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    WsModule,
    HealthModule,
    ListModule,
    ListItemModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

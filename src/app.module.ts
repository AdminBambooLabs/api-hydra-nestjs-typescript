import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './database/prisma.service';
import { UserModule } from './modules/user/user.module';
import { ListModule } from './modules/list/list.module';
import { ListItemModule } from './modules/list-item/list-item.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HealthModule,
    UserModule,
    ListModule,
    ListItemModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

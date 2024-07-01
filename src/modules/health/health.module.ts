import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { version, name } from '../../../package.json';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [HealthController],
  providers: [
    {
      provide: 'PACKAGE_VERSION',
      useValue: version,
    },
    {
      provide: 'PACKAGE_NAME',
      useValue: name,
    },
    PrismaService,
  ],
})
export class HealthModule {}

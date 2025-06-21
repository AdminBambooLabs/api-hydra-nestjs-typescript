import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { version, name } from '../../../package.json';

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
  ],
})
export class HealthModule {}

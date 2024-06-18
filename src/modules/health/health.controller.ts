import { Controller, Get, Inject } from '@nestjs/common';

@Controller('health')
export class HealthController {
  constructor(
    @Inject('PACKAGE_VERSION')
    public readonly packageVersion: string,
    @Inject('PACKAGE_NAME')
    public readonly packageName: string,
  ) {}

  @Get()
  health() {
    return {
      health: `${this.packageName} is alive in version ${this.packageVersion}`,
    };
  }
}

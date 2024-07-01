import { Controller, Get, Inject } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Controller('health')
export class HealthController {
  constructor(
    @Inject('PACKAGE_VERSION')
    public readonly packageVersion: string,
    @Inject('PACKAGE_NAME')
    public readonly packageName: string,
    private prisma: PrismaService
  ) {}

  @Get()
  async getHealth() {
    const defaultUser = await this.prisma.user.findUnique({
      where: {
        id: 1
      }
    })

    return {
      health: `${this.packageName} is alive in version ${this.packageVersion}`,
      user: defaultUser
    };
  }
}

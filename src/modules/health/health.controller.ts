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
    let user = null;
    user = await this.prisma.user.findUnique({
      where: {
        id: 1
      }
    })

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          email: 'user@teste.com',
          name: 'Usuário Teste'
        }
      })
    }

    return {
      health: `${this.packageName} is alive in version ${this.packageVersion}`,
      userDBTest: user
    };
  }
}

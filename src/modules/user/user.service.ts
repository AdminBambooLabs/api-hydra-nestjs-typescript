import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { randomUUID } from "node:crypto"

@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService
  ) { }

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.prismaService.user.create({
      data: { ...createUserDto, id: randomUUID() }
    })

    return { newUser };
  }

  async findAll() {
    const userList = await this.prismaService.user.findMany()
    return { userList };
  }

  async findOne(id: string) {
    try {
      const findUser = await this.prismaService.user.findUnique({
        where: {
          id
        }
      })

      if (!findUser) throw new Error(`Cannot find user with id: ${id}`)
      // if (!findUser) return { message: `Cannot find user with id: ${id}` }
      
      return findUser
    } catch {
      return { message: `Cannot find user with id: ${id}` };
    }
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

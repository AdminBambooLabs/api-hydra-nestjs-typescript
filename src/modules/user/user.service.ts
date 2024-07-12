import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    try {
      const newUser = await this.prismaService.user.create({
        data: { ...createUserDto, id: randomUUID() }
      })
  
      return { data: newUser };
    } catch (error) {
      throw new HttpException({ status: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Cannot create user' }, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findAll() {
    try {
      const userList = await this.prismaService.user.findMany()

      return { data: userList };
    } catch (error) {
      throw new HttpException({ status: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Cannot get users list' }, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async findOne(id: string) {
    try {
      const findUser = await this.prismaService.user.findUnique({
        where: {
          id
        }
      })

      if (!findUser) throw new Error(`Cannot find user with id: ${id}`);
            
      return { data: findUser }
    } catch (error) {
      throw new HttpException({ status: HttpStatus.BAD_REQUEST, message: `Cannot find user with id: ${id}`}, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const updatedUser = await this.prismaService.user.update({
        data: updateUserDto,
        where: {
          id
        }
      })
      return { data: updatedUser };
    } catch (error) {
      throw new HttpException({ status: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Cannot update user'}, HttpStatus.INTERNAL_SERVER_ERROR);
    
    }
  }

  async remove(id: string) {
    try {
      return await this.prismaService.user.delete({
        where: {
          id
        }
      })
    } catch (error) {
      throw new HttpException({ status: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Cannot delete user'}, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

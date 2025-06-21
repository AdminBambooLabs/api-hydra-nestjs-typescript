import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';
import { UpdateListDto } from './dto/update-list.dto';

@Injectable()
export class ListService {
  constructor(private prismaService: PrismaService) {}

  async create(createListDto: Prisma.ListCreateInput) {
    const newList = await this.prismaService.list.create({
      data: createListDto,
      include: { items: true },
    });
    return { data: newList };
  }

  async findAll() {
    const listOfLists = await this.prismaService.list.findMany({
      include: { items: true },
    });
    return { data: listOfLists };
  }

  async findOne(id: string) {
    const listFound = await this.prismaService.list.findUnique({
      where: { id },
      include: { items: true },
    });
    return { data: listFound };
  }

  async update(id: string, updateListDto: UpdateListDto) {
    const updatedList = await this.prismaService.list.update({
      where: { id },
      data: updateListDto,
    });

    return { data: updatedList };
  }

  async remove(id: string) {
    return await this.prismaService.list.delete({
      where: { id },
    });
  }
}

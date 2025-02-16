import { Injectable } from '@nestjs/common';
import { CreateListItemDto } from './dto/create-list-item.dto';
import { UpdateListItemDto } from './dto/update-list-item.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ListItemService {
  constructor(private prismaService: PrismaService) {}

  async create(createListItemDto: Prisma.ListItemCreateInput) {
    const createdListItem = await this.prismaService.listItem.create({
      data: createListItemDto,
    });
    return { data: createdListItem };
  }

  async findAll() {
    const listOfItems = await this.prismaService.listItem.findMany();
    return { data: listOfItems };
  }

  async findOne(id: string) {
    const listItemFound = await this.prismaService.listItem.findUnique({
      where: { id },
    });

    return { data: listItemFound };
  }

  async update(id: string, updateListItemDto: UpdateListItemDto) {
    const updatedListItem = await this.prismaService.listItem.update({
      data: updateListItemDto,
      where: { id },
    });
    return { data: updatedListItem };
    return `This action updates a #${id} listItem`;
  }

  async remove(id: string) {
    return await this.prismaService.listItem.delete({
      where: { id },
    });
  }
}

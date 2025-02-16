import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ListItemService } from './list-item.service';
import { CreateListItemDto } from './dto/create-list-item.dto';
import { UpdateListItemDto } from './dto/update-list-item.dto';
import { Prisma } from '@prisma/client';

@Controller('list-item')
export class ListItemController {
  constructor(private readonly listItemService: ListItemService) {}

  @Post()
  create(@Body() createListItemDto: Prisma.ListItemCreateInput) {
    return this.listItemService.create(createListItemDto);
  }

  @Get()
  findAll() {
    return this.listItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listItemService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateListItemDto: Prisma.ListItemUpdateInput,
  ) {
    return this.listItemService.update(id, updateListItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listItemService.remove(id);
  }
}

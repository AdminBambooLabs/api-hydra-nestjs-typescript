import { IsNotEmpty, IsString } from 'class-validator';
import { List } from '../entities/list.entity';
import { ListItem } from 'src/modules/list-item/entities/list-item.entity';

export class CreateListDto extends List {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  userId: string;

  items: ListItem[];
}

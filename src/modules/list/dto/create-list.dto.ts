import { IsNotEmpty, IsString } from 'class-validator';
import { List } from '../entities/list.entity';
import { ListItem } from 'src/modules/list-item/entities/list-item.entity';

export class CreateListDto extends List {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  readonly items: ListItem[];
}

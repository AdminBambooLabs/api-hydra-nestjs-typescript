import AbstractEntity from 'src/common/entities/abstract';
import { ListItem } from 'src/modules/list-item/entities/list-item.entity';

export class List extends AbstractEntity {
  readonly name: string;
  readonly items: ListItem[];
}

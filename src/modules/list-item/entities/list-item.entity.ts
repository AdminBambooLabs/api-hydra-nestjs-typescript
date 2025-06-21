import AbstractEntity from 'src/common/entities/abstract';

export class ListItem extends AbstractEntity {
  readonly name: string;
  readonly description: string;
  readonly checked: boolean;
  readonly listId: string;
}

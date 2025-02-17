import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ListItem } from '../entities/list-item.entity';

export class CreateListItemDto extends ListItem {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsBoolean()
  readonly checked: boolean;

  @IsString()
  readonly listId: string;
}

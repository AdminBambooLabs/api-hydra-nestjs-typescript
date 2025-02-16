import AbstractEntity from 'src/common/entities/abstract';

export class User extends AbstractEntity {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;
}

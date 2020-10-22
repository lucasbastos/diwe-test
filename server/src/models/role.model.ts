import {Entity, model, property, hasMany} from '@loopback/repository';
import {Category} from './category.model';
import {Rolecategories} from './rolecategories.model';

@model()
export class Role extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'boolean',
    required: true,
  })
  active: boolean;

  @hasMany(() => Category, {through: {model: () => Rolecategories}})
  categories: Category[];

  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = Role & RoleRelations;

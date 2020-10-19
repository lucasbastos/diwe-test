import {Entity, hasMany, model, property} from '@loopback/repository';
import {category} from './category.model';

@model()
export class role extends Entity {
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

  @hasMany(() => category)
  categories?: category[];


  constructor(data?: Partial<role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = role & RoleRelations;

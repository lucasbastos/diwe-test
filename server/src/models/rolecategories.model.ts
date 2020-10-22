import {Entity, model, property} from '@loopback/repository';

@model()
export class Rolecategories extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  roleId: number;

  @property({
    type: 'number',
    required: true,
  })
  categoryId: number;


  constructor(data?: Partial<Rolecategories>) {
    super(data);
  }
}

export interface RolecategoriesRelations {
  // describe navigational properties here
}

export type RolecategoriesWithRelations = Rolecategories & RolecategoriesRelations;

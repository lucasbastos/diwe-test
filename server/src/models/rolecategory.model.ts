import {Entity, model, property} from '@loopback/repository';

@model()
export class rolecategory extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

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


  constructor(data?: Partial<rolecategory>) {
    super(data);
  }
}

export interface RolecategoryRelations {
  // describe navigational properties here
}

export type RolecategoryWithRelations = rolecategory & RolecategoryRelations;

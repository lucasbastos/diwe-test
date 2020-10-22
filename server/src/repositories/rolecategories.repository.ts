import {DefaultCrudRepository} from '@loopback/repository';
import {Rolecategories, RolecategoriesRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RolecategoriesRepository extends DefaultCrudRepository<
  Rolecategories,
  typeof Rolecategories.prototype.id,
  RolecategoriesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Rolecategories, dataSource);
  }
}

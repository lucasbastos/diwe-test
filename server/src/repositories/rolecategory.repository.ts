import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {rolecategory, RolecategoryRelations} from '../models';

export class RolecategoryRepository extends DefaultCrudRepository<
  rolecategory,
  typeof rolecategory.prototype.id,
  RolecategoryRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(rolecategory, dataSource);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {role, RoleRelations} from '../models';

export class RoleRepository extends DefaultCrudRepository<
  role,
  typeof role.prototype.id,
  RoleRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(role, dataSource);
  }
}

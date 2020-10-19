import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {category, CategoryRelations} from '../models';

export class CategoryRepository extends DefaultCrudRepository<
  category,
  typeof category.prototype.id,
  CategoryRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(category, dataSource);
  }
}

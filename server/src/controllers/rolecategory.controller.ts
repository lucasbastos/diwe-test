import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import {rolecategory} from '../models';
import {RolecategoryRepository} from '../repositories';

export class RolecategoryController {
  constructor(
    @repository(RolecategoryRepository)
    public rolecategoryRepository : RolecategoryRepository,
  ) {}

  @post('/rolecategories', {
    responses: {
      '200': {
        description: 'Rolecategory model instance',
        content: {'application/json': {schema: getModelSchemaRef(rolecategory)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(rolecategory, {
            title: 'NewRolecategory',

          }),
        },
      },
    })
    rolecategory: rolecategory,
  ): Promise<rolecategory> {
    return this.rolecategoryRepository.create(rolecategory);
  }

  @get('/rolecategories/count', {
    responses: {
      '200': {
        description: 'Rolecategory model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(rolecategory) where?: Where<rolecategory>,
  ): Promise<Count> {
    return this.rolecategoryRepository.count(where);
  }

  @get('/rolecategories', {
    responses: {
      '200': {
        description: 'Array of Rolecategory model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(rolecategory, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(rolecategory) filter?: Filter<rolecategory>,
  ): Promise<rolecategory[]> {
    return this.rolecategoryRepository.find(filter);
  }

  @patch('/rolecategories', {
    responses: {
      '200': {
        description: 'Rolecategory PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(rolecategory, {partial: true}),
        },
      },
    })
    rolecategory: rolecategory,
    @param.where(rolecategory) where?: Where<rolecategory>,
  ): Promise<Count> {
    return this.rolecategoryRepository.updateAll(rolecategory, where);
  }

  @get('/rolecategories/{id}', {
    responses: {
      '200': {
        description: 'Rolecategory model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(rolecategory, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(rolecategory, {exclude: 'where'}) filter?: FilterExcludingWhere<rolecategory>
  ): Promise<rolecategory> {
    return this.rolecategoryRepository.findById(id, filter);
  }

  @patch('/rolecategories/{id}', {
    responses: {
      '204': {
        description: 'Rolecategory PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(rolecategory, {partial: true}),
        },
      },
    })
    rolecategory: rolecategory,
  ): Promise<void> {
    await this.rolecategoryRepository.updateById(id, rolecategory);
  }

  @put('/rolecategories/{id}', {
    responses: {
      '204': {
        description: 'Rolecategory PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() rolecategory: rolecategory,
  ): Promise<void> {
    await this.rolecategoryRepository.replaceById(id, rolecategory);
  }

  @del('/rolecategories/{id}', {
    responses: {
      '204': {
        description: 'Rolecategory DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.rolecategoryRepository.deleteById(id);
  }
}

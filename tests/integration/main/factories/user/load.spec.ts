jest.mock('@/main/config/knex')

import knex from '@/main/config/knex'
import { PostgresqlUser } from '@/infra/contracts'
import { loadUsersController } from '@/main/factories'
import { LoadUsersController, UserViewModel } from '@/presentation'

const postgresqlUsers: PostgresqlUser[] = [
  {
    id: '6aea824d-1690-4056-8449-ee26dca84196',
    first_name: 'Ricardo',
    last_name: 'Castanho',
    email: 'ricardo_castanho@test.com',
    password: '************',
    created_at: '2021-05-10T20:49:55.684Z',
    updated_at: '2021-05-10T20:49:55.684Z',
    deleted_at: '2021-05-10T20:49:55.684Z'
  },
  {
    id: 'de55e846-d279-4916-b960-a06a5c80b1ac',
    first_name: 'Ronadinho',
    last_name: 'Gaúcho',
    email: 'ronaldinho@test.com',
    password: '************',
    created_at: '2021-05-10T20:49:55.684Z',
    updated_at: '2021-05-10T20:49:55.684Z',
    deleted_at: null
  }
]

const presentationUsers: UserViewModel[] = [
  {
    id: '6aea824d-1690-4056-8449-ee26dca84196',
    firstName: 'Ricardo',
    lastName: 'Castanho',
    email: 'ricardo_castanho@test.com',
    createdAt: '2021-05-10T20:49:55.684Z',
    updatedAt: '2021-05-10T20:49:55.684Z',
    deletedAt: '2021-05-10T20:49:55.684Z'
  },
  {
    id: 'de55e846-d279-4916-b960-a06a5c80b1ac',
    firstName: 'Ronadinho',
    lastName: 'Gaúcho',
    email: 'ronaldinho@test.com',
    createdAt: '2021-05-10T20:49:55.684Z',
    updatedAt: '2021-05-10T20:49:55.684Z',
    deletedAt: null
  }
]

it('should return loadUsersController factory', async () => {
  const mockedKnex = knex as jest.Mocked<typeof knex>
  mockedKnex.from.mockResolvedValue(postgresqlUsers)

  const controller = await loadUsersController()

  expect(controller).toBeInstanceOf(LoadUsersController)
  expect(controller.handle()).toEqual(presentationUsers)
})

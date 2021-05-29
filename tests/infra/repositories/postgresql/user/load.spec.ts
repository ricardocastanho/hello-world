import { User } from '@/domain'
import { LoadPostgresqlUsersRepository } from '@/infra/repositories'
import { PostgresqlUser } from '@/infra/contracts'

const postgresqlUsers: PostgresqlUser[] = [
  {
    id: '6aea824d-1690-4056-8449-ee26dca84196',
    first_name: 'Ricardo',
    last_name: 'Castanho',
    email: 'ricardo_castanho@test.com',
    password: '**********',
    created_at: '2020-05-10T20:49:55.201Z',
    updated_at: '2021-06-15T22:29:05.958Z',
    deleted_at: '2021-07-18T16:33:18.625Z'
  },
  {
    id: 'de55e846-d279-4916-b960-a06a5c80b1ac',
    first_name: 'Ronadinho',
    last_name: 'Gaúcho',
    email: 'ronaldinho@test.com',
    password: '************',
    created_at: '2020-05-10T20:49:55.201Z',
    updated_at: '2021-06-15T22:29:05.958Z',
    deleted_at: null,
  }
]

const users: User[] = [
  {
    id: '6aea824d-1690-4056-8449-ee26dca84196',
    firstName: 'Ricardo',
    lastName: 'Castanho',
    email: 'ricardo_castanho@test.com',
    password: '**********',
    createdAt: new Date('2020-05-10T20:49:55.201Z'),
    updatedAt: new Date('2021-06-15T22:29:05.958Z'),
    deletedAt: new Date('2021-07-18T16:33:18.625Z')
  },
  {
    id: 'de55e846-d279-4916-b960-a06a5c80b1ac',
    firstName: 'Ronadinho',
    lastName: 'Gaúcho',
    email: 'ronaldinho@test.com',
    password: '************',
    createdAt: new Date('2020-05-10T20:49:55.201Z'),
    updatedAt: new Date('2021-06-15T22:29:05.958Z'),
    deletedAt: null,
  }
]

it('should convert users with postgresql format to user domain format', () => {
  const repo = new LoadPostgresqlUsersRepository(postgresqlUsers)

  expect(repo.loadUsers()).toEqual(users)
})

import { User } from '@/domain'
import { LoadPostgresqlUsersRepository } from '@/infra/repositories'
import { PostgresqlUser } from '@/infra/contracts'

const postgresqlUser: PostgresqlUser = {
  id: '6aea824d-1690-4056-8449-ee26dca84196',
  first_name: 'Ricardo',
  last_name: 'Castanho',
  email: 'ricardo_castanho@test.com',
  password: '**********',
  created_at: '2020-05-10T20:49:55.201Z',
  updated_at: '2021-06-15T22:29:05.958Z',
  deleted_at: '2021-07-18T16:33:18.625Z'
}

const user: User = {
  id: postgresqlUser.id,
  firstName: postgresqlUser.first_name,
  lastName: postgresqlUser.last_name,
  email: postgresqlUser.email,
  password: postgresqlUser.password,
  createdAt: new Date(postgresqlUser.created_at),
  updatedAt: new Date(postgresqlUser.updated_at),
  deletedAt: new Date(postgresqlUser.deleted_at)
}

it('should convert users with postgresql format to user domain format with dates', () => {
  const repo = new LoadPostgresqlUsersRepository([ postgresqlUser ])

  expect(repo.loadUsers()).toEqual([ user ])
})

it('should convert users with postgresql format to user domain format with null dates', () => {
  const repo = new LoadPostgresqlUsersRepository([{
    ...postgresqlUser,
    created_at: null,
    updated_at: null,
    deleted_at: null
  }])

  expect(repo.loadUsers()).toEqual([{
    ...user,
    createdAt: null,
    updatedAt: null,
    deletedAt: null
  }])
})

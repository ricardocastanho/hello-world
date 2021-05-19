jest.mock('@/main/config/knex')

import knex from '@/main/config/knex'
import { loadUsers } from '@/infra/data-sources/postgresql/knex'
import { PostgresqlUser } from '@/infra/contracts'

const users: PostgresqlUser[] = [{
  id: '6aea824d-1690-4056-8449-ee26dca84196',
  first_name: 'Ricardo',
  last_name: 'Castanho',
  email: 'ricardo_castanho@test.com',
  password: '**********',
  created_at: '2021-05-10T20:49:55.684Z',
  updated_at: '2021-05-10T20:49:55.684Z',
  deleted_at: null
}]

it('should return all users with postgresql database format', async () => {
  const mockedKnex = knex as jest.Mocked<typeof knex>

  mockedKnex.from.mockResolvedValue(users)

  await expect(loadUsers())
    .resolves
    .toEqual(users)

  expect(knex.from).toHaveBeenCalled()
  expect(knex.from).toHaveBeenCalledTimes(1)
  expect(knex.from).toHaveBeenCalledWith('users')
});

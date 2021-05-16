import { PostgresqlUser } from '@/infra/contracts'
import { Knex } from 'knex'

export const loadUsers = async (knex: Knex): Promise<PostgresqlUser[]> =>
  await knex<PostgresqlUser>('users')

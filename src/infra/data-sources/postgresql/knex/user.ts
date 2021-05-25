import knex from '@/main/config/knex'
import { PostgresqlUser } from '@/infra/contracts'

export const loadUsers = async (): PostgresqlUser[] =>
  await knex.from<PostgresqlUser>('users')

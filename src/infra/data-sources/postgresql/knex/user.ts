import knex from '@/main/config/knex'
import { PosgresqlUser } from '@/infra/contracts/postgresql'

export const loadUsers = async (): Promise<PosgresqlUser[]> =>
  await knex<PosgresqlUser>('users')

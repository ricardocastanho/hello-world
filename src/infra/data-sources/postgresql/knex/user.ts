import knex from '@/main/config/knex'
import { PosgresqlUser } from '@/infra/contracts'

export const loadUsers = async (): Promise<PosgresqlUser[]> =>
  await knex<PosgresqlUser>('users')

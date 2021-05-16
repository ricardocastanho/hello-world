import knex from '@/main/config/knex'
import { LoadUsersService } from '@/services'
import { loadUsers } from '@/infra/data-sources/postgresql/knex'
import { LoadPostgresqlUsersRepository } from '@/infra/repositories'
import { Controller } from '@/presentation/contracts'
import { UserViewModel } from '@/presentation/view-models'
import { LoadUsersController } from '@/presentation/controllers'

export const loadUsersController = async (): Promise<Controller<UserViewModel[]>> => {
  const users = await loadUsers(knex)
  const repo = new LoadPostgresqlUsersRepository(users)
  const loader = new LoadUsersService(repo)
  return new LoadUsersController(loader)
}

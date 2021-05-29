import { LoadUsersService } from '@/domain'
import { loadUsers } from '@/infra/data-sources/postgresql/knex'
import { LoadPostgresqlUsersRepository } from '@/infra/repositories'
import { Controller, LoadUsersController, UserViewModel } from '@/presentation'

export const loadUsersController = async (): Promise<Controller<UserViewModel[]>> => {
  const users = await loadUsers()
  const repo = new LoadPostgresqlUsersRepository(users)
  const loader = new LoadUsersService(repo)
  return new LoadUsersController(loader)
}

import { Controller } from '@/presentation/contracts'
import { loadUsers } from '@/infra/data-sources/postgresql/knex'
import { LoadUsersRepository } from '@/infra/repositories'
import { LoadUserService } from '@/data/services'
import { LoadUsersController } from '@/presentation/controllers'

export const loadUsersController = async (): Promise<Controller> => {
  const users = await loadUsers()
  const repo = new LoadUsersRepository(users)
  const loader = new LoadUserService(repo)
  return new LoadUsersController(loader)
}

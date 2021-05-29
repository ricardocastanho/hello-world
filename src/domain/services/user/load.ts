import { User, LoadUsersUseCase } from '@/domain'
import { LoadUsersRepository } from '@/infra/contracts'

export class LoadUsersService implements LoadUsersUseCase {
  constructor (private readonly loadUsersRepository: LoadUsersRepository) {}

  loadUsers (): User[] {
    return this.loadUsersRepository.loadUsers()
  }
}

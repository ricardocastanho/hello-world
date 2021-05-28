import { User } from '@/domain/entities'
import { LoadUsersUseCase } from '@/domain/usecases'
import { LoadUsersRepository } from '@/infra/contracts'

export class LoadUsersService implements LoadUsersUseCase {
  constructor (private readonly loadUsersRepository: LoadUsersRepository) {}

  loadUsers (): User[] {
    return this.loadUsersRepository.loadUsers()
  }
}

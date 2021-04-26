import { User } from '@/domain/entities'
import { UserLoader } from '@/domain/usecases'
import { LoadUserRepository } from '@/data/contracts'

export class UserLoaderService implements UserLoader {
  constructor (private readonly loadUserRepository: LoadUserRepository) {}

  async load (): Promise<User[]> {
    return this.loadUserRepository.loadUser()
  }
}

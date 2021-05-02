import { User } from '@/domain/entities'
import { LoadUser } from '@/domain/usecases'
import { UserRepository } from '@/data/respositories'

export class LoadUserService implements LoadUser {
  constructor (private readonly loadUserRepository: UserRepository) {}

  async load (): Promise<User[]> {
    return this.loadUserRepository.loadUsers()
  }
}

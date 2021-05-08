import { User } from '@/domain/entities'

export interface LoadUsersUseCase {
  loadUsers: () => Promise<User[]>
}

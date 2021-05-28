import { User } from '@/domain/entities'

export interface LoadUsersUseCase {
  loadUsers: () => User[]
}

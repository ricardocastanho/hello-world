import { User } from '@/domain'

export interface LoadUsersUseCase {
  loadUsers: () => User[]
}

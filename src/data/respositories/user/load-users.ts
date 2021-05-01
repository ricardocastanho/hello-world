import { UserModel } from '@/data/models'

export interface UserRepository {
  loadUsers: () => Promise<UserModel[]>
}

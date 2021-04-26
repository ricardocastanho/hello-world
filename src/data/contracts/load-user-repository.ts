import { UserModel } from '@/data/models'

export interface LoadUserRepository {
  loadUser: () => Promise<UserModel[]>
}

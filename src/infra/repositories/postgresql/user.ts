import { UserModel } from '@/data/models'
import { UserRepository } from '@/data/respositories'
import { PosgresqlUser } from '@/infra/contracts/postgresql'

export class LoadUsersRepository implements UserRepository {
  constructor (private readonly postgresqlUsers: PosgresqlUser[]) {}

  async loadUsers (): Promise<UserModel[]> {
    return this.postgresqlUsers.map(item => ({
      id: item.id,
      firstName: item.first_name,
      lastName: item.last_name,
      email: item.email,
      password: item.password,
      createdAt: new Date(item.created_at),
      updatedAt: new Date(item.updated_at),
      deletedAt: new Date(item.deleted_at)
    }))
  }
}

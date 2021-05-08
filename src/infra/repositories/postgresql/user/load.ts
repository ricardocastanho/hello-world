import { User } from '@/domain/entities'
import { LoadUsersRepository, PosgresqlUser } from '@/infra/contracts'

export class LoadPostgresqlUsersRepository implements LoadUsersRepository {
  constructor (private readonly postgresqlUsers: PosgresqlUser[]) {}

  async loadUsers (): Promise<User[]> {
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

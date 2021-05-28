import { User } from '@/domain/entities'
import { LoadUsersRepository, PostgresqlUser } from '@/infra/contracts'

export class LoadPostgresqlUsersRepository implements LoadUsersRepository {
  constructor (private readonly postgresqlUsers: PostgresqlUser[]) {}

  loadUsers (): User[] {
    return this.postgresqlUsers.map(item => ({
      id: item.id,
      firstName: item.first_name,
      lastName: item.last_name,
      email: item.email,
      password: item.password,
      createdAt: item.created_at ? new Date(item.created_at) : null,
      updatedAt: item.updated_at ? new Date(item.updated_at) : null,
      deletedAt: item.deleted_at ? new Date(item.deleted_at) : null
    }))
  }
}

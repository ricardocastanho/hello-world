import { User } from '@/domain/entities'

export class UserViewModel {
  id: string
  firstName: string
  lastName: string
  email: string
  createdAt: string
  updatedAt: string
  deletedAt: string

  static map (entity: User): UserViewModel {
    return {
      id: entity.id,
      firstName: entity.firstName,
      lastName: entity.lastName,
      email: entity.email,
      createdAt: entity.createdAt.toISOString(),
      updatedAt: entity.updatedAt.toISOString(),
      deletedAt: entity.deletedAt.toISOString()
    }
  }

  static mapCollection (entities: User[]): UserViewModel[] {
    return entities.map(entity => UserViewModel.map(entity))
  }
}

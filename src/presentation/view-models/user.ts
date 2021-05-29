import { User } from '@/domain'

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
      createdAt: entity.createdAt ? entity.createdAt.toISOString() : null,
      updatedAt: entity.updatedAt ? entity.updatedAt.toISOString() : null,
      deletedAt: entity.deletedAt ? entity.deletedAt.toISOString() : null
    }
  }

  static mapCollection (entities: User[]): UserViewModel[] {
    return entities.map(entity => UserViewModel.map(entity))
  }
}

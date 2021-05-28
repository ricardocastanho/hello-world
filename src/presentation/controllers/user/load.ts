import { LoadUsersUseCase } from '@/domain/usecases'
import { Controller } from '@/presentation/contracts'
import { UserViewModel } from '@/presentation/view-models'

export class LoadUsersController implements Controller {
  constructor (private readonly loadUsersService: LoadUsersUseCase) {}

  handle (): UserViewModel[] {
    try {
      const users = this.loadUsersService.loadUsers()

      return UserViewModel.mapCollection(users)
    } catch (error) {
      return error
    }
  }
}

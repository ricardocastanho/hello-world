import { LoadUsersUseCase } from '@/domain/usecases'
import { Controller, UserViewModel } from '@/presentation'
export class LoadUsersController implements Controller {
  constructor (private readonly loadUsersService: LoadUsersUseCase) {}

  handle (): UserViewModel[] {
    const users = this.loadUsersService.loadUsers()

    return UserViewModel.mapCollection(users)
  }
}

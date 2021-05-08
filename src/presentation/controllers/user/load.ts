import { LoadUsersUseCase } from '@/domain/usecases'
import { Controller } from '@/presentation/contracts'
import { UserViewModel } from '@/presentation/view-models'

export class LoadUsersController implements Controller {
  constructor (private readonly loadUsersService: LoadUsersUseCase) {}

  async handle (): Promise<UserViewModel[]> {
    try {
      const users = await this.loadUsersService.loadUsers()

      return UserViewModel.mapCollection(users)
    } catch (error) {
      return error
    }
  }
}

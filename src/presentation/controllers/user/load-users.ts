import { LoadUser } from '@/domain/usecases'
import { Controller } from '@/presentation/contracts'
import { UserViewModel } from '@/presentation/view-models'

export class LoadUsersController implements Controller {
  constructor (private readonly loadUser: LoadUser) {}

  async handle (): Promise<UserViewModel[]> {
    try {
      const users = await this.loadUser.load()

      return UserViewModel.mapCollection(users)
    } catch (error) {
      return error
    }
  }
}

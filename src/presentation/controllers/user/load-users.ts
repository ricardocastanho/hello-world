import { LoadUser } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, serverSuccess } from '@/presentation/contracts'
import { UserViewModel } from '@/presentation/view-models'

export class LoadUsersController implements Controller {
  constructor (private readonly loadUser: LoadUser) {}

  async handle (): Promise<HttpResponse<UserViewModel[]>> {
    try {
      const users = await this.loadUser.load()

      return serverSuccess(UserViewModel.mapCollection(users))
    } catch (error) {
      return serverError(error)
    }
  }
}

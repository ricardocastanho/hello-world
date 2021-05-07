import { UserViewModel } from '@/presentation/view-models'
import { loadUsersController } from '@/main/factories'

export default {
  Query: {
    loadUsers: async (): Promise<UserViewModel[]> => {
      const controller = await loadUsersController()

      return controller.handle()
    }
  }
}

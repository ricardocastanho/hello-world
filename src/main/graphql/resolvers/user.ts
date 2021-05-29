import { UserViewModel } from '@/presentation'
import { loadUsersController } from '@/main/factories'

export default {
  Query: {
    loadUsers: async (): Promise<UserViewModel[]> => {
      const controller = await loadUsersController()

      return controller.handle()
    }
  }
}

import { Controller } from '@/presentation/contracts'
import { loadUsersController } from '@/main/factories'

export default {
  Query: {
    loadUsers: async (): Promise<Controller> => {
      const controller = await loadUsersController()

      return controller.handle()
    }
  }
}

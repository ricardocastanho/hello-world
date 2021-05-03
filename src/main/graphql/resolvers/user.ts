import { Controller } from '@/presentation/contracts'
import { loadUsersController } from '@/main/factories'

export default {
  Query: {
    userLoad: async (): Promise<Controller> => {
      const controller = await loadUsersController()

      return controller.handle()
    }
  }
}

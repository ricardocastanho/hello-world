import { adaptResolver } from '@/main/adapters'
import { loadUsersController } from '@/main/factories'

export default {
  Query: {
    loadUsers: async () => {
      const controller = await loadUsersController()
      return adaptResolver(controller)
    }
  }
}

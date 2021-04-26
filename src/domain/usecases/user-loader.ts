import { User } from '@/domain/entities'

export interface UserLoader {
  load: () => Promise<User[]>
}

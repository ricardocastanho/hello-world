import { User } from '@/domain/entities'

export interface LoadUser {
  load: () => Promise<User[]>
}

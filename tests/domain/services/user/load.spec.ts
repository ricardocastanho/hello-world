import { User, LoadUsersService } from '@/domain'
import { LoadUsersRepository } from '@/infra/contracts'

const users: User[] = [{
  id: '6aea824d-1690-4056-8449-ee26dca84196',
  firstName: 'Ricardo',
  lastName: 'Castanho',
  email: 'ricardo_castanho@test.com',
  password: '**********',
  createdAt: new Date('2021-05-10T20:49:55.684Z'),
  updatedAt: new Date('2021-05-10T20:49:55.684Z'),
  deletedAt: null
}]

class mockedRepo implements LoadUsersRepository {
  loadUsers (): User[] {
    return users
  }
}

it('should aplly the business logic to load users', () => {
  const repo = new mockedRepo()

  const service = new LoadUsersService(repo)

  expect(service.loadUsers()).toEqual(users)
})

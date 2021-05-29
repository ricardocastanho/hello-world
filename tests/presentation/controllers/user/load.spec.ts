import { LoadUsersUseCase, User } from '@/domain'
import { LoadUsersController, UserViewModel } from '@/presentation'

const users: User[] = [
  {
    id: '6aea824d-1690-4056-8449-ee26dca84196',
    firstName: 'Ricardo',
    lastName: 'Castanho',
    email: 'ricardo_castanho@test.com',
    password: '**********',
    createdAt: new Date('2021-05-10T20:49:55.684Z'),
    updatedAt: new Date('2021-05-10T20:49:55.684Z'),
    deletedAt: new Date('2021-05-10T20:49:55.684Z')
  },
  {
    id: 'de55e846-d279-4916-b960-a06a5c80b1ac',
    firstName: 'Ronadinho',
    lastName: 'Gaúcho',
    email: 'ronaldinho@test.com',
    password: '**********',
    createdAt: new Date('2021-05-10T20:49:55.684Z'),
    updatedAt: new Date('2021-05-10T20:49:55.684Z'),
    deletedAt: null
  }
]

const presentationUsers: UserViewModel[] = [
  {
    id: '6aea824d-1690-4056-8449-ee26dca84196',
    firstName: 'Ricardo',
    lastName: 'Castanho',
    email: 'ricardo_castanho@test.com',
    createdAt: '2021-05-10T20:49:55.684Z',
    updatedAt: '2021-05-10T20:49:55.684Z',
    deletedAt: '2021-05-10T20:49:55.684Z'
  },
  {
    id: 'de55e846-d279-4916-b960-a06a5c80b1ac',
    firstName: 'Ronadinho',
    lastName: 'Gaúcho',
    email: 'ronaldinho@test.com',
    createdAt: '2021-05-10T20:49:55.684Z',
    updatedAt: '2021-05-10T20:49:55.684Z',
    deletedAt: null
  }
]

class MockedService implements LoadUsersUseCase {
  loadUsers (): User[] {
    return users
  }
}

it('should return the loadUsers controller', () => {
  const service = new MockedService()

  const controller = new LoadUsersController(service)

  expect(controller.handle()).toEqual(presentationUsers)
})

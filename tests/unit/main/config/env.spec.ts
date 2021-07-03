import env from '@/main/config/env'

it.skip('should return env variables with default value', () => {
  expect(env).toEqual({
    dbHost: '127.0.0.1',
    dbPort: '1000',
    dbName: 'local',
    dbUser: 'root',
    dbPassword: 'root'
  })
})

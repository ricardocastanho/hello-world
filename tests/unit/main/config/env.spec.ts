delete process.env.DB_NAME
delete process.env.DB_USER
delete process.env.DB_PASSWORD
delete process.env.DB_PORT
delete process.env.DB_HOST

import env from '@/main/config/env'

it('should return env variables with default value', () => {
  expect(env).toEqual({
    dbHost: '127.0.0.1',
    dbPort: '1000',
    dbName: 'local',
    dbUser: 'root',
    dbPassword: 'root'
  })
})

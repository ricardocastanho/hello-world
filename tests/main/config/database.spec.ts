import database from '@/main/config/database'
import env from '@/main/config/env'

it('should return the database configurations', () => {
  expect(database).toEqual({
    client: 'pg',
    connection: {
      port: env.dbPort,
      host: env.dbHost,
      user: env.dbUser,
      password: env.dbPassword,
      database: env.dbName
    }
  })
})

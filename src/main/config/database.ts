import env from '@/main/config/env'

export default Object.freeze({
  client: 'pg',
  connection: Object.freeze({
    port: env.dbPort,
    host: env.dbHost,
    user: env.dbUser,
    password: env.dbPassword,
    database: env.dbName
  })
})

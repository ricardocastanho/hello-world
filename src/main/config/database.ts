import env from '@/main/config/env'

export default Object.freeze({
  client: 'pg',
  connection: Object.freeze({
    port: env.dbPort || '5000',
    host: env.dbHost || '127.0.0.1',
    user: env.dbUser || 'root',
    password: env.dbPassword || 'root',
    database: env.dbName || 'local'
  })
})

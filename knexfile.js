const path = require('path')

const absolute = dest => path.join(__dirname, dest)

const dotenv = require('dotenv')
dotenv.config({
  path: path.join(__dirname, './.env')
})

module.exports = {
  client: 'pg',
  connection: Object.freeze({
    port: process.env.DB_PORT || '5432',
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'local'
  }),
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: absolute('knex/migrations'),
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: absolute('knex/seeds')
  },
  onUpdateTrigger: table => `
    CREATE TRIGGER ${table}_updated_at
    BEFORE UPDATE ON ${table}
    FOR EACH ROW
    EXECUTE PROCEDURE on_update();
  `
}

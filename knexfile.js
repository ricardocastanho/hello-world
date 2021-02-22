const path = require('path')
const { config } = require('./src/infra')

const absolute = dest => path.join(__dirname, dest)

module.exports = {
  ...config,
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

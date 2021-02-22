const { onUpdateTrigger } = require('../../knexfile')

exports.up = async (knex) => {
  return knex.schema
    .createTable('users', (table) => {
      table.uuid('id').primary().notNullable()
      table.string('first_name', 20).notNullable()
      table.string('last_name', 20).notNullable()
      table.string('email', 30).notNullable()
      table.string('password', 30).notNullable()
      table.timestamps(true, true)
      table.timestamp('deleted_at')
    })
    .then(() => knex.raw(onUpdateTrigger('users')))
}

exports.down = async (knex) => {
  return knex.schema
    .dropTable('users')
}

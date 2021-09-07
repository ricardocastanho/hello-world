const { onUpdateTrigger } = require('../../knexfile')

exports.up = async knex => {
  await knex.schema
    .createTable('users', table => {
      table.uuid('id').primary().notNullable()
      table.string('first_name', 30).notNullable()
      table.string('last_name', 50).notNullable()
      table.string('email', 100).notNullable().unique()
      table.string('password', 100).notNullable()
      table.timestamps(true, true)
      table.timestamp('deleted_at')
    })
    .then(() => knex.raw(onUpdateTrigger('users')))
}

exports.down = async knex => {
  await knex.schema.dropTable('users')
}

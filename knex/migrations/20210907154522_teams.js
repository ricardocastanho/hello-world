const { onUpdateTrigger } = require('../../knexfile')

exports.up = async knex => {
  await knex.schema
    .createTable('teams', table => {
      table.uuid('id').primary().notNullable()
      table.string('name', 45).notNullable()
      table.string('logo', 100)
      table.timestamps(true, true)
      table.timestamp('deleted_at')
    })
    .then(() => knex.raw(onUpdateTrigger('teams')))
}

exports.down = async knex => {
  await knex.schema.dropTable('teams')
}

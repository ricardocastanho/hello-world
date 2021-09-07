const { onUpdateTrigger } = require('../../knexfile')

exports.up = async knex => {
  await knex.schema
    .createTable('products', table => {
      table.uuid('id').primary().notNullable()
      table.uuid('team_id').notNullable()
      table.string('name', 45).notNullable()
      table.string('description', 150)
      table.date('deadline')
      table.timestamps(true, true)
      table.timestamp('deleted_at')

      table.foreign('team_id').references('teams.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    .then(() => knex.raw(onUpdateTrigger('products')))
}

exports.down = async knex => {
  await knex.schema.dropTable('products')
}

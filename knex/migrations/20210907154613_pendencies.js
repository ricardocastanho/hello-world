const { onUpdateTrigger } = require('../../knexfile')

exports.up = async knex => {
  await knex.schema
    .createTable('pendencies', table => {
      table.uuid('id').primary().notNullable()
      table.uuid('product_id').notNullable()
      table.uuid('sprint_id')
      table.string('history', 150).notNullable()
      table.enu('points', [1, 3, 5, 8, 13, 21]).notNullable()
      table.enu('status', ['TODO', 'DOING', 'DONE']).notNullable().defaultTo('ToDo')
      table.timestamps(true, true)
      table.timestamp('deleted_at')
      table.foreign('product_id').references('products.id').onDelete('CASCADE')
      table.foreign('sprint_id').references('sprints.id').onDelete('CASCADE')
    })
    .then(() => knex.raw(onUpdateTrigger('pendencies')))
}

exports.down = async knex => {
  await knex.schema.dropTable('pendencies')
}

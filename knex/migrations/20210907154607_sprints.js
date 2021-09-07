const { onUpdateTrigger } = require('../../knexfile')

exports.up = async knex => {
  await knex.schema
    .createTable('sprints', table => {
      table.uuid('id').primary().notNullable()
      table.uuid('product_id').notNullable()
      table.string('name', 45)
      table.enu('duration', ['ONEWEEK', 'TWOWEEKS']).notNullable()
      table.timestamps(true, true)
      table.timestamp('deleted_at')

      table.foreign('product_id').references('products.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    .then(() => knex.raw(onUpdateTrigger('sprints')))
}

exports.down = async knex => {
  await knex.schema.dropTable('sprints')
}

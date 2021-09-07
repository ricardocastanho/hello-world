const { onUpdateTrigger } = require('../../knexfile')

exports.up = async knex => {
  await knex.schema
    .createTable('users_teams', table => {
      table.uuid('id').primary().notNullable()
      table.uuid('user_id').notNullable()
      table.uuid('team_id').notNullable()
      table.enu('role', ['TEAMMATE', 'SCRUMMASTER', 'PRODUCTOWNER']).notNullable()
      table.timestamps(true, true)
      table.timestamp('deleted_at')

      table.foreign('user_id').references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.foreign('team_id').references('teams.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    .then(() => knex.raw(onUpdateTrigger('users_teams')))
}

exports.down = async knex => {
  await knex.schema.dropTable('users_teams')
}

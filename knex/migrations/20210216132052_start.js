const { onUpdateTrigger } = require('../../knexfile')

exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (table) => {
      table.uuid('id').primary().notNullable()
      table.string('first_name', 30).notNullable()
      table.string('last_name', 50).notNullable()
      table.string('email', 100).notNullable().unique()
      table.string('password', 100).notNullable()
      table.timestamps(true, true)
      table.timestamp('deleted_at')
    })
    .then(() => knex.raw(onUpdateTrigger('users')))

  await knex.schema
    .createTable('teams', (table) => {
      table.uuid('id').primary().notNullable()
      table.string('name', 45).notNullable()
      table.string('logo', 100)
      table.timestamps(true, true)
      table.timestamp('deleted_at')
    })
    .then(() => knex.raw(onUpdateTrigger('teams')))

  await knex.schema
    .createTable('users_teams', (table) => {
      table.uuid('id').primary().notNullable()
      table.uuid('user_id').notNullable()
      table.uuid('team_id').notNullable()
      table.enu('role', ['TEAMMATE', 'SCRUMMASTER', 'PRODUCTOWNER']).notNullable()
      table.foreign('user_id').references('users.id').onDelete('CASCADE')
      table.foreign('team_id').references('teams.id').onDelete('CASCADE')
      table.timestamps(true, true)
      table.timestamp('deleted_at')
    })
    .then(() => knex.raw(onUpdateTrigger('users_teams')))

  await knex.schema
    .createTable('products', (table) => {
      table.uuid('id').primary().notNullable()
      table.uuid('team_id').notNullable()
      table.string('name', 45).notNullable()
      table.string('description', 150)
      table.date('deadline')
      table.timestamps(true, true)
      table.timestamp('deleted_at')
      table.foreign('team_id').references('teams.id').onDelete('CASCADE')
    })
    .then(() => knex.raw(onUpdateTrigger('products')))

  await knex.schema
    .createTable('sprints', (table) => {
      table.uuid('id').primary().notNullable()
      table.uuid('product_id').notNullable()
      table.string('name', 45)
      table.enu('duration', ['ONEWEEK', 'TWOWEEKS']).notNullable()
      table.timestamps(true, true)
      table.timestamp('deleted_at')
      table.foreign('product_id').references('products.id').onDelete('CASCADE')
    })
    .then(() => knex.raw(onUpdateTrigger('sprints')))

  await knex.schema
    .createTable('pendencies', (table) => {
      table.uuid('id').primary().notNullable()
      table.uuid('product_id').notNullable()
      table.uuid('sprint_id')
      table.string('history', 150).notNullable()
      table.enu('points', [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]).notNullable()
      table.enu('status', ['TODO', 'DOING', 'DONE']).notNullable().defaultTo('ToDo')
      table.timestamps(true, true)
      table.timestamp('deleted_at')
      table.foreign('product_id').references('products.id').onDelete('CASCADE')
      table.foreign('sprint_id').references('sprints.id').onDelete('CASCADE')
    })
    .then(() => knex.raw(onUpdateTrigger('pendencies')))
}

exports.down = async (knex) => {
  return knex.schema
    .dropTable('users_teams')
    .dropTable('pendencies')
    .dropTable('sprints')
    .dropTable('products')
    .dropTable('teams')
    .dropTable('users')
}

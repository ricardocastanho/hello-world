const faker = require('faker')
const { range } = require('lodash')
const { TEAMS_MAX } = require('../length')

faker.locale = 'pt_BR'

const modelTeams = () => ({
  id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  logo: faker.datatype.boolean() ? faker.image.business() : null,
  created_at: faker.date.recent(30),
  updated_at: faker.date.recent(30),
  deleted_at: faker.datatype.boolean() ? faker.date.recent(30) : null
})

const insertTeams = async knex => {
  const teams = range(TEAMS_MAX)
    .map(() => modelTeams())

  await knex('teams')
    .insert(teams)
}

exports.seed = async knex => {
  await knex('teams').del()

  await insertTeams(knex)
}

const faker = require('faker')
const { map, range, isEmpty } = require('lodash')
const { PRODUCTS_PER_TEAM_MAX } = require('../length')

faker.locale = 'pt_BR'

const modelProducts = team => ({
  id: faker.datatype.uuid(),
  team_id: team.id,
  name: faker.lorem.slug(),
  description: faker.datatype.boolean() ? faker.lorem.words(8) : null,
  deadline: faker.datatype.boolean() ? faker.date.future(1) : null,
  created_at: faker.date.recent(30),
  updated_at: faker.date.recent(30),
  deleted_at: faker.datatype.boolean() ? faker.date.recent(30) : null
})

const insertProducts = async (knex, { teams }) => {
  const products = map(teams, team => {
    return range(faker.datatype.number(PRODUCTS_PER_TEAM_MAX))
      .map(() => modelProducts(team))
  })

  for (const product of products) {
    if (isEmpty(product)) {
      return
    }

    await knex('products')
      .insert(product)
  }
}

exports.seed = async knex => {
  await knex('products').del()

  const teams = await knex('teams')

  await insertProducts(knex, { teams })
}

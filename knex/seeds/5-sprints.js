const faker = require('faker')
const { map, range, isEmpty } = require('lodash')
const { SPRINTS_PER_PRODUCT_MAX } = require('../length')

faker.locale = 'pt_BR'

const modelSprints = product => ({
  id: faker.datatype.uuid(),
  product_id: product.id,
  name: faker.datatype.boolean() ? faker.lorem.words(3) : null,
  duration: ['ONEWEEK', 'TWOWEEKS'][faker.datatype.number(1)],
  created_at: faker.date.recent(30),
  updated_at: faker.date.recent(30),
  deleted_at: faker.datatype.boolean() ? faker.date.recent(30) : null
})

const insertSprints = async (knex, { products }) => {
  const sprints = map(products, product => {
    return range(faker.datatype.number(SPRINTS_PER_PRODUCT_MAX)).map(() =>
      modelSprints(product)
    )
  })

  for (const sprint of sprints) {
    if (isEmpty(sprint)) {
      return
    }

    await knex('sprints').insert(sprint)
  }
}

exports.seed = async knex => {
  await knex('sprints').del()

  const products = await knex('products')

  await insertSprints(knex, { products })
}

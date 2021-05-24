const faker = require('faker')
const { map, range, isEmpty } = require('lodash')
const { PENDENCIES_PER_PRODUCT_MAX } = require('../length')

faker.locale = 'pt_BR'

const modelPendencies = (product, sprint) => ({
  id: faker.datatype.uuid(),
  product_id: product.id,
  sprint_id: faker.datatype.boolean() ? sprint.id : null,
  history: faker.lorem.words(10),
  points: [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144][faker.datatype.number(10)],
  status: ['TODO', 'DOING', 'DONE'][faker.datatype.number(2)],
  created_at: faker.date.recent(30),
  updated_at: faker.date.recent(30),
  deleted_at: faker.datatype.boolean() ? faker.date.recent(30) : null
})

const insertPendencies = async (knex, { products, sprints }) => {
  const pendencies = map(products, product => {
    return range(faker.datatype.number(PENDENCIES_PER_PRODUCT_MAX)).map(() => {
      const sprint = sprints[faker.datatype.number(sprints.length - 1)]

      return modelPendencies(product, sprint)
    })
  })

  for (const pendency of pendencies) {
    if (isEmpty(pendency)) {
      return
    }

    await knex('pendencies').insert(pendency)
  }
}

exports.seed = async knex => {
  await knex('pendencies').del()

  const products = await knex('products')
  const sprints = await knex('sprints')

  await insertPendencies(knex, { products, sprints })
}

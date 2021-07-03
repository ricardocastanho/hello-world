const faker = require('faker')
const { reduce, range } = require('lodash')
const { PENDENCIES_PER_PRODUCT_MAX } = require('../length')

faker.locale = 'pt_BR'

const modelPendencies = (product, sprint) => ({
  id: faker.datatype.uuid(),
  product_id: product.id,
  sprint_id: faker.datatype.boolean() ? sprint.id : null,
  history: faker.lorem.words(10),
  points: [1, 3, 5, 8, 13, 21][faker.datatype.number(5)],
  status: ['TODO', 'DOING', 'DONE'][faker.datatype.number(2)],
  created_at: faker.date.recent(30),
  updated_at: faker.date.recent(30),
  deleted_at: faker.datatype.boolean() ? faker.date.recent(30) : null
})

const insertPendencies = (products, sprints) =>
  reduce(products, (result, product) => {
    const pendency = range(faker.datatype.number(PENDENCIES_PER_PRODUCT_MAX)).map(() => {
      const sprint = sprints[faker.datatype.number(sprints.length - 1)]

      return modelPendencies(product, sprint)
    })

    return [
      ...pendency,
      ...result
    ]
  }, [])

exports.seed = async knex => {
  await knex('pendencies').del()

  const products = await knex('products')
  const sprints = await knex('sprints')

  const pendencies = insertPendencies(products, sprints)

  await knex('pendencies').insert(pendencies)
}

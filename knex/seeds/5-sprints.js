const faker = require('faker')
const { reduce, range } = require('lodash')
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

const makeSprints = products =>
  reduce(products, (result, product) => {
    const sprint = range(faker.datatype.number(SPRINTS_PER_PRODUCT_MAX)).map(() =>
      modelSprints(product)
    )

    return [
      ...sprint,
      ...result
    ]
  }, [])

exports.seed = async knex => {
  await knex('sprints').del()

  const products = await knex('products')

  const sprints = makeSprints(products)

  await knex('sprints').insert(sprints)
}

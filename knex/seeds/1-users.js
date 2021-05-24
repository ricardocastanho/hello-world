const argon2 = require('argon2')
const faker = require('faker')
const { range } = require('lodash')
const { USERS_MAX } = require('../length')

faker.locale = 'pt_BR'

const firstEmail = 'user@test.com'
const basePassword = '12345678'

const modelUser = async email => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()

  return {
    id: faker.datatype.uuid(),
    first_name: firstName,
    last_name: lastName,
    email: email || faker.internet.email(firstName, lastName),
    password: await argon2.hash(basePassword),
    created_at: faker.date.recent(30),
    updated_at: faker.date.recent(30),
    deleted_at: faker.datatype.boolean() ? faker.date.recent(30) : null
  }
}

const insertUsers = async knex => {
  const firstUser = await modelUser(firstEmail)
  const users = await Promise.all(range(USERS_MAX)
    .map(() => modelUser()))

  await knex('users')
    .insert([firstUser, ...users])

  return [firstUser, ...users]
}

exports.seed = async knex => {
  await knex('users').del()

  await insertUsers(knex)
}

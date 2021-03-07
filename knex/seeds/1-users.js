const { range } = require('lodash')
const { v4 } = require('uuid')
const argon2 = require('argon2')
const faker = require('faker')
faker.locale = 'pt_BR'

const firstEmail = 'user@test.com'
const basePassword = '12345678'

const modelUser = async (email) => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()

  return {
    id: v4(),
    first_name: firstName,
    last_name: lastName,
    email: email || faker.internet.email(firstName, lastName),
    password: await argon2.hash(basePassword)
  }
}

exports.seed = async (knex) => {
  await knex('users').del()

  const firstUser = await modelUser(firstEmail)
  const users = await Promise.all(range(200).map(() => modelUser()))

  await knex('users')
    .insert([firstUser, ...users])
}

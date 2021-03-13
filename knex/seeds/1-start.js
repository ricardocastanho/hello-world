const { range, map } = require('lodash')
const argon2 = require('argon2')
const faker = require('faker')

faker.locale = 'pt_BR'

const firstEmail = 'user@test.com'
const basePassword = '12345678'

const USERS_LENGTH = 200
const TEAMS_LENGTH = 50
const TEAMS_PER_USER_MAX = 3
const PRODUCTS_PER_TEAM_MAX = 3
const SPRINTS_PER_PRODUCT_MAX = 5
const PENDENCIES_PER_PRODUCT_MAX = 50

const modelUser = async (email) => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()

  return {
    id: faker.random.uuid(),
    first_name: firstName,
    last_name: lastName,
    email: email || faker.internet.email(firstName, lastName),
    password: await argon2.hash(basePassword)
  }
}

const modelTeams = () => {
  return {
    id: faker.random.uuid(),
    name: faker.company.companyName(),
    logo: faker.random.boolean() ? faker.image.business() : null
  }
}

const modelUserTeams = (user, team) => {
  return {
    id: faker.random.uuid(),
    user_id: user.id,
    team_id: team.id,
    role: [
      'TEAMMATE',
      'SCRUMMASTER',
      'PRODUCTOWNER'
    ][faker.random.boolean() ? faker.random.number(2) : 0]
  }
}

const modelProducts = team => {
  return {
    id: faker.random.uuid(),
    team_id: team.id,
    name: faker.lorem.slug(),
    description: faker.random.boolean() ? faker.lorem.words(8) : null,
    deadline: faker.random.boolean() ? faker.date.future(1) : null
  }
}

const modelSprints = product => {
  return {
    id: faker.random.uuid(),
    product_id: product.id,
    name: faker.random.boolean() ? faker.lorem.words(3) : null,
    duration: ['ONEWEEK', 'TWOWEEKS'][faker.random.number(1)]
  }
}

const modelPendencies = (product, sprint) => {
  return {
    id: faker.random.uuid(),
    product_id: product.id,
    sprint_id: faker.random.boolean() ? sprint.id : null,
    history: faker.lorem.words(10),
    points: [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144][faker.random.number(10)],
    status: ['TODO', 'DOING', 'DONE'][faker.random.number(2)]
  }
}

const insertUsers = async knex => {
  const firstUser = await modelUser(firstEmail)
  const users = await Promise.all(range(USERS_LENGTH)
    .map(() => modelUser()))

  await knex('users')
    .insert([firstUser, ...users])

  return [firstUser, ...users]
}

const insertTeams = async knex => {
  const teams = range(TEAMS_LENGTH)
    .map(() => modelTeams())

  await knex('teams')
    .insert(teams)

  return teams
}

const insertUsersTeams = async (knex, { users, teams }) => {
  const usersTeams = map(users, user => {
    return range(faker.random.number(TEAMS_PER_USER_MAX))
      .map(() => {
        const team = teams[faker.random.number(TEAMS_LENGTH - 1)]

        return modelUserTeams(user, team)
      })
  })

  for (const userTeam of usersTeams) {
    await knex('users_teams')
      .insert(userTeam)
  }
}

const insertProducts = async (knex, { teams }) => {
  const products = map(teams, team => {
    return range(faker.random.number(PRODUCTS_PER_TEAM_MAX))
      .map(() => modelProducts(team))
  })

  for (const product of products) {
    await knex('products')
      .insert(product)
  }
}

const insertSprints = async (knex, { products }) => {
  const sprints = map(products, product => {
    return range(faker.random.number(SPRINTS_PER_PRODUCT_MAX))
      .map(() => modelSprints(product))
  })

  for (const sprint of sprints) {
    await knex('sprints')
      .insert(sprint)
  }
}

const insertPendencies = async (knex, { products, sprints }) => {
  const pendencies = map(products, product => {
    return range(faker.random.number(PENDENCIES_PER_PRODUCT_MAX))
      .map(() => {
        const sprint = sprints[faker.random.number(sprints.length - 1)]

        return modelPendencies(product, sprint)
      })
  })

  for (const pendency of pendencies) {
    await knex('pendencies')
      .insert(pendency)
  }
}

exports.seed = async (knex) => {
  await knex('users').del()
  await knex('teams').del()
  await knex('users_teams').del()
  await knex('products').del()
  await knex('sprints').del()

  const users = await insertUsers(knex)

  const teams = await insertTeams(knex)

  await insertUsersTeams(knex, { users, teams })

  await insertProducts(knex, { teams })
  const products = await knex('products')

  await insertSprints(knex, { products })
  const sprints = await knex('sprints')

  await insertPendencies(knex, { products, sprints })
}

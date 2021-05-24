const faker = require('faker')
const { range, map, isEmpty } = require('lodash')
const { TEAMS_PER_USER_MAX } = require('../length')

faker.locale = 'pt_BR'

const modelUserTeams = (user, team) => ({
  id: faker.datatype.uuid(),
  user_id: user.id,
  team_id: team.id,
  role: ['TEAMMATE', 'SCRUMMASTER', 'PRODUCTOWNER'][
    faker.datatype.boolean() ? faker.datatype.number(2) : 0
  ],
  created_at: faker.date.recent(30),
  updated_at: faker.date.recent(30),
  deleted_at: faker.datatype.boolean() ? faker.date.recent(30) : null
})

const insertUsersTeams = async (knex, { users, teams }) => {
  const usersTeams = map(users, user => {
    return range(faker.datatype.number(TEAMS_PER_USER_MAX)).map(() => {
      const team = teams[faker.datatype.number(teams.length - 1)]

      return modelUserTeams(user, team)
    })
  })

  for (const userTeam of usersTeams) {
    if (isEmpty(userTeam)) {
      return
    }

    await knex('users_teams').insert(userTeam)
  }
}

exports.seed = async knex => {
  await knex('users_teams').del()

  const users = await knex('users')
  const teams = await knex('teams')

  await insertUsersTeams(knex, { users, teams })
}

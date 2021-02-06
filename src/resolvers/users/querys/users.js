const users = async (root, params, { database, logger }) => {
  return [{
    id: 1,
    firstName: 'Ricardo',
    lastName: 'Castanho',
    email: 'ricardinhorl@hotmail.com',
    password: '*****'
  }]
}

module.exports = { users }

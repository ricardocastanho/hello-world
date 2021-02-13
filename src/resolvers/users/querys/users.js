const users = async (root, params, { database, logger }) => {
  return await database('users')
}

module.exports = { users }

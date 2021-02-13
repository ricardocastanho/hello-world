const { v4: uuid } = require('uuid')
const database = require('./database')

const buildContext = ({ logger: rootLogger }) => {
  const logger = rootLogger.child({
    requestId: uuid()
  })

  const context = {
    database,
    logger
  }

  return context
}

module.exports = { buildContext }

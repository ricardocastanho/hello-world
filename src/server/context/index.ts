const { v4: uuid } = require('uuid')
const database = require('./database')

const buildContext = ({ logger: rootLogger }: any) => {
  const logger = rootLogger.child({
    requestId: uuid()
  })

  const context = {
    database,
    logger
  }

  return context
}

export { buildContext }

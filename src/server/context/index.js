const { v4: uuid } = require('uuid')

const buildContext = ({ logger: rootLogger }) => {
  const logger = rootLogger.child({
    requestId: uuid()
  })

  const context = { logger }

  return context
}

module.exports = { buildContext }

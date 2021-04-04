const pino = require('pino')

const dest = pino.destination()

const logger = pino({
  name: 'scrum-graphql',
  messageKey: 'message',
  level: process.env.LOG_LEVEL || 'info',
  prettyPrint: process.env.NODE_ENV === 'development',
  formatters: {
    level (label) {
      return { level: label }
    }
  },
  base: {
    instance: process.env.NODE_APP_INSTANCE,
    processName: process.env.name,
    appVersion: process.env.APP_VERSION || require('../../package.json').version
  }
}, dest)

setInterval(() => {
  logger.flush()
}, 7000).unref()

export { logger }

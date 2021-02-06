const pino = require('pino')
const { onStop } = require('./signal')

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

const handler = pino.final(logger, (err, finalLogger, evt) => {
  finalLogger.info(`${evt} caught`)

  dest.flushSync()

  if (err) {
    finalLogger.error(err, 'error caused exit')
  }
})

onStop(handler)

module.exports = { logger }

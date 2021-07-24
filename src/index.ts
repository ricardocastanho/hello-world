import 'module-alias/register'
import pino from 'pino'

import buildApp from '@/main/config/app'
import env from '@/main/config/env'

const logger = pino()

const app = buildApp(logger)

// eslint-disable-next-line @typescript-eslint/no-floating-promises
app.listen({ port: env.appPort })
  .then(({ url }) => {
    logger.info(`🚀  Server ready at ${url}`)
  })

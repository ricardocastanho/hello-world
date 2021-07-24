import { Logger } from 'pino'

type Context = {
  logger: Logger
}

export default (logger: Logger): Context => ({
  logger
})

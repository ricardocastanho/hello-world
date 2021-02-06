const { wait } = require('./wait')

const listeners = []

const onStop = (listener) => {
  listeners.push(listener)
}

const fireListeners = (err, signal) => {
  return Promise.all(listeners.map((fn) => fn(err, signal)))
}

const handler = async (err, signal) => {
  let localError = null
  try {
    await Promise.race([
      fireListeners(err, signal),
      wait(6000)
    ])
  } catch (e) {
    if (e) {
      console.error(e)
    }
    localError = e
  } finally {
    process.exit(localError || err ? 1 : 0)
  }
}

process.on('beforeExit', () => handler(null, 'beforeExit'))
process.on('exit', () => handler(null, 'exit'))
process.on('uncaughtException', (err) => handler(err, 'uncaughtException'))
process.on('SIGINT', () => handler(null, 'SIGINT'))
process.on('SIGQUIT', () => handler(null, 'SIGQUIT'))
process.on('SIGTERM', () => handler(null, 'SIGTERM'))

module.exports = { onStop }

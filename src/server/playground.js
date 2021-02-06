const buildPlaygroundOptions = isProd => {
  if (isProd) {
    return false
  }

  return {
    settings: {
      'schema.polling.interval': 10000
    }
  }
}

module.exports = { buildPlaygroundOptions }

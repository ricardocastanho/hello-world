const { ApolloServer } = require('apollo-server')
const { buildTypeDefs } = require('./type-defs')
const { buildResolvers } = require('./resolvers')
const { buildContext } = require('./context')
const { buildPlaygroundOptions } = require('./playground')

const isProd = process.env.NODE_ENV === 'production'

const buildServer = async ({ logger }) => {
  const [resolvers, typeDefs] = await Promise.all([
    buildResolvers(),
    buildTypeDefs()
  ])

  const server = new ApolloServer({
    context: buildContext({ logger }),
    playground: buildPlaygroundOptions(isProd),
    tracing: !isProd,
    subscriptions: false,
    formatError (error) {
      return {
        ...error,
        message: error.message.replace('Context creation failed:', '').trim()
      }
    },
    typeDefs,
    resolvers
  })

  return server
}

module.exports = { buildServer }

import { ApolloServer } from 'apollo-server'
import { Logger } from 'pino'

import buildContext from './context'
import typeDefs from '@/main/graphql/type-defs'
import resolvers from '@/main/graphql/resolvers'

export default (logger: Logger): ApolloServer =>
  new ApolloServer({
    context: buildContext(logger),
    resolvers,
    typeDefs
  })

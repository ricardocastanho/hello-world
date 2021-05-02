import { ApolloServer } from 'apollo-server'

import typeDefs from '@/main/graphql/type-defs'
import resolvers from '@/main/graphql/resolvers'

const app = new ApolloServer({
  resolvers,
  typeDefs
})

export default app

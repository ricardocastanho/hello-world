import { ApolloServer } from 'apollo-server'

import app from '@/main/config/app'

it('should build ApolloServer instance', () => {
  expect(app()).toBeInstanceOf(ApolloServer)
  expect(app()).toHaveProperty('config.resolvers')
  expect(app()).toHaveProperty('config.typeDefs')
})

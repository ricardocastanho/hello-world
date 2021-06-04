import { ApolloServer } from 'apollo-server'
import { GraphQLScalarType } from 'graphql'

import app from '@/main/config/app'

it('should build ApolloServer instance', () => {
  expect(app).toBeInstanceOf(ApolloServer)
  expect(app).toHaveProperty('config.resolvers', [
    {
      Query: {
        loadUsers: expect.any(Function)
      }
    },
    {
      Upload: expect.any(GraphQLScalarType)
    }
  ])
  expect(app).toHaveProperty('config.typeDefs')
})

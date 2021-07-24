import { ApolloServer } from 'apollo-server'

import pino from 'pino'
const baseLogger = pino()

import app from '@/main/config/app'

const logger = baseLogger as jest.Mocked<typeof baseLogger>

it('should build ApolloServer instance', () => {
  const aplication = app(logger)

  expect(aplication).toBeInstanceOf(ApolloServer)
  expect(aplication).toHaveProperty('config.resolvers')
  expect(aplication).toHaveProperty('config.typeDefs')
})

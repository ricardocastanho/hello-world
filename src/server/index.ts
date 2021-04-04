import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { buildContext } from './context'
import { User } from '../entitys/users'

const buildSchemas = async () => {
  return await buildSchema({
    resolvers: [User]
  })
}

const buildServer = async ({ logger }: any): Promise<any> => {
  const server = new ApolloServer({
    context: await buildContext({ logger }),
    schema: await buildSchemas()
  })

  return server
}

export { buildServer }

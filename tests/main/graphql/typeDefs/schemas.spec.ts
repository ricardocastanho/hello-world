import { gql } from 'apollo-server'
import typeDefs from '@/main/graphql/type-defs'

const base = gql`
  type Query {
    _: String
  }
`

const user = gql`
  extend type Query {
    loadUsers: [User!]
  }

  type User {
    id: String
    firstName: String
    lastName: String
    email: String
    createdAt: String
    updatedAt: String
    deletedAt: String
  }
`

it('should return all schemas', () => {
  expect(typeDefs).toEqual([base, user])
})

import { Resolver, Query } from 'type-graphql'

@Resolver()
export class User {
  @Query(() => String)
  users () {
    return 'Hello World!'
  }
}

import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { CreateUserInput } from "../dtos/Inputs/create-user.input";
import { User } from "../dtos/models/user.model";

@Resolver()
class UsersResolvers {
  @Query(() => User)
  async getUser(): Promise<User> {
    const user = {
        name: 'john',
        password: 'hardpassword'
    }

    return user;
  }
  @Mutation(() => User)
  async createUser(@Arg("data") data: CreateUserInput): Promise<User> {
    const user = {
        name: 'john',
        password: 'hardpassword'
    }

    return user;
  }
}

export { UsersResolvers };

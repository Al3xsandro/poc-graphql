import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UsersResolvers } from "./resolvers/users.resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
        UsersResolvers
    ],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen()

  console.info(`[INFO] Server is listen ${url}`);
}

bootstrap();

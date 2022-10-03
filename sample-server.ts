import { ApolloServer, gql } from "apollo-server";
import { randomUUID } from "node:crypto";

/* Querys and muttations */
const typeDefs = gql`
    type User {
        id: string!
        name: string!
    }

    type Query {
        users: [User!]! # must return a string array
    }

    type Mutation {
        createUser(name: string!): String! # must receive and return a string
    }
`;

interface User {
    id: string;
    name: string;
}

const users: User[] = [];

/* Server settings */
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            users: () => {
                return users;
            }
        },
        Mutation: {
            createUser: (_, args, ctx) => {
                const user = {
                    id: randomUUID(),
                    name: String(args.name)
                }
                users.push(user);

                return user;
            }
        }
    } // work like controllers
});

server.listen().then(({ url }) => {
    console.info(`[INFO] server is running ${url}`);
});
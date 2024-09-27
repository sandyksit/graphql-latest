import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose'
import { typeDefs } from './graphql/schemas/schema.js';
import { resolvers } from './graphql/resolvers/Resolvers.js';

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect('mongodb://localhost:27017/graphql-users')

mongoose.connection.once('open', ()=>{
    console.log('Connected to mongodb')
})

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({ token: req.headers.token }),
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at ${url}`);
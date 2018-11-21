import express from 'express';
import http from 'http';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const apollo = new ApolloServer({ typeDefs, resolvers });
const app = express();
app.use(cors());
app.use(express.static('public'));
apollo.applyMiddleware({ app });

const server = http.createServer(app);

apollo.installSubscriptionHandlers(server);

server.listen({ port: 4000 }, () =>
    console.log('Server ready at', `port ${4000}${apollo.graphqlPath}`)
);

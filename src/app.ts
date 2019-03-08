import Koa from 'koa';
import { ApolloServer, gql } from 'apollo-server-koa';

import routes from './routes';
import { createConnection } from 'typeorm';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'hello world'
  }
};

export default class App {
  app: Koa;
  constructor() {
    this.app = new Koa();
    this.middleware();
    this.initializeDB();
    this.apollo();
  }
  middleware = (): void => {
    const { app } = this;
    app.use(routes.routes()).use(routes.allowedMethods());
  }
  apollo = (): void => {
    const { app } = this;
    const apollo = new ApolloServer({ typeDefs, resolvers });
    apollo.applyMiddleware({ app });
  }
  initializeDB = async ()  => {
    try {
      await createConnection();
      console.log('postgresQL connection is established');
    } catch (e) {
      console.log(e);
    }
  }
  listen = (port: number): void => {
    const { app } = this;
    app.listen(port, () => {
      console.log(`Youtube server is listening to ${port}`);
    });
  }
}
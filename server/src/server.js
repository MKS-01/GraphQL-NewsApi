const express = require("express");
const { ApolloServer } = require("apollo-server-express");
// const cors = require("cors");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { SERVER_PORT } = require("../config");

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    debug: true,
  });

  await server.start();

  // app.use("*", cors());
  // app.use(compression());

  server.applyMiddleware({ app });

  await new Promise((resolve) =>
    app.listen({ port: `${process.env.SERVER_PORT || SERVER_PORT}` }, resolve)
  );
  console.log(
    `🚀 Server ready at http://localhost:${
      process.env.SERVER_PORT || SERVER_PORT
    }${server.graphqlPath}`
  );
  return { server, app };
}

startApolloServer();

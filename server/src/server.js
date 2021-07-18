const { ApolloServer } = require("apollo-server-express");
const express = require("express");

const NewsAPI = require("./dataSources/REST/newsAPI");

const { buildSchema } = require("./schema.js");

const { SERVER_PORT } = require("../config");

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    schema: await buildSchema(),
    introspection: true,
    // playground: true,
    debug: true,

    dataSources: () => ({
      newsAPI: new NewsAPI(),
    }),

    context: ({ req, res }) => {
      // models;
    },
  });

  await server.start();

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

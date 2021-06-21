const express = require("express");

const { ApolloServer } = require("apollo-server-express");

// const cors = require("cors");

const NewsAPI = require("./dataSources/REST/newsAPI");

const { buildSchema } = require("./schema.js");

const { SERVER_PORT } = require("../config");

const { models, ConnectDB } = require("./dataSources/models");

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    schema: await buildSchema(),
    introspection: true,
    playground: true,
    debug: true,

    dataSources: () => ({
      newsAPI: new NewsAPI(),
    }),

    context: ({ req, res }) => {
      models;
    },
  });

  await server.start();

  // app.use("*", cors());

  server.applyMiddleware({ app });
  ConnectDB();
  // await mongoose.connect(process.env.CONNECTIONSTRING || CONNECTIONSTRING, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   useFindAndModify: false,
  //   useCreateIndex: true,
  // });

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

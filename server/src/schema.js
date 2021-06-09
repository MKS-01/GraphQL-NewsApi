const typeDefs = require("./typeDefs.js");
const resolvers = require("./resolvers");
const { makeExecutableSchema } = require("apollo-server-express");

async function buildSchema() {
  return makeExecutableSchema({
    typeDefs,
    resolvers,
  });
}

exports.buildSchema = buildSchema;

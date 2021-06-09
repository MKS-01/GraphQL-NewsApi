const typeDefs = require("./typeDefs.js");
const { makeExecutableSchema } = require("apollo-server-express");
const { buildResolvers } = require("./resolvers/");

async function buildSchema() {
  return makeExecutableSchema({
    typeDefs,
    resolvers: await buildResolvers(),
  });
}

exports.buildSchema = buildSchema;

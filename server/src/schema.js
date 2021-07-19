const typeDefs = require("./typeDefs.js");
const resolvers = require("./resolvers");
const { makeExecutableSchema } = require("@graphql-tools/schema");

async function buildSchema() {
  return makeExecutableSchema({
    typeDefs,
    resolvers,
  });
}

exports.buildSchema = buildSchema;

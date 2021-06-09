const { buildQuery } = require("./query");
const { buildMutation } = require("./mutation");

async function buildResolvers() {
  return {
    Query: buildQuery(),
    Mutation: buildMutation(),
  };
}

exports.buildResolvers = buildResolvers;

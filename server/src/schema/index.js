const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    getBooks: [Book]
  }
`;

module.exports = typeDefs;

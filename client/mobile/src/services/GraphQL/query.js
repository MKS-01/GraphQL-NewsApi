import { gql } from "@apollo/client";

const TOP_HEADLINES = gql`
  query topHeadlines($input: NewsAPIInput) {
    topHeadlines(input: $input) {
      id
      author
      title
      description
      url
      urlToImage
      publishedAt
      content
    }
  }
`;

export { TOP_HEADLINES };

import { gql } from "@apollo/client";

//  AddBookmarkInput{

// }

const ADD_BOOKMARK = gql`
  mutation Mutation($input: AddBookmarkInput) {
    addBookmark(input: $input) {
      id
    }
  }
`;

export { ADD_BOOKMARK };

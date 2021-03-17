import { gql } from "@apollo/client";
export default gql`
query GetUser($id: Int) {
  user(id: $id) {
    id
    firstName
    lastName
    name
    posts {
        id
        title
        body
    }
  }
}
`;

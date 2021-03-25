import { gql } from "@apollo/client";
export default gql`
query GetUser($id: Int) {
  user(id: $id) {
    id
    firstName
    lastName
    name
    posts {
        totalCount
        nodes {
            id
            title
            body
        }
    }
    comments {
        totalCount
        nodes {
            id
            body
            post {
                id
                title
            }
        }
    }
  }
}
`;

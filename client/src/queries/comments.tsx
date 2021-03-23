import { gql } from "@apollo/client";
export default gql`
query GetComments {
    comments {
        id
        body
        author {
            id
            name
        }
        post {
            id
            title
        }
    }
}
`;

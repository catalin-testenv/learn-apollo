import { gql } from "@apollo/client";
export default gql`
query GetComments {
    comments {
        totalCount
        nodes {
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
}
`;

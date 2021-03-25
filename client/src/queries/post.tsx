import { gql } from "@apollo/client";
export default gql`
query GetPost($id: Int) {
    post(id: $id) {
        id
        title
        body
        author {
            id
            name
        }
        comments {
            totalCount
            nodes {
                id
                body
                author {
                    id
                    name
                }
            }
        }
    }
}
`;

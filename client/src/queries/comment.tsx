import { gql } from "@apollo/client";
export default gql`
query GetComment($id: Int) {
    comment(id: $id) {
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

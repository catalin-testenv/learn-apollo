import { gql } from "@apollo/client";
export const getComments = gql`
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

export const getComment = gql`
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

import { gql } from "@apollo/client";
export default gql`
query GetPosts {
    posts {
        id
        title
        author {
            id
            name
        }
        comments {
            id
            body
            author {
                id
                name
            }
        }
    }
}
`;

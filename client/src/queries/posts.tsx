import { gql } from "@apollo/client";
export default gql`
query GetPosts {
    posts {
        totalCount
        nodes {
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
}
`;

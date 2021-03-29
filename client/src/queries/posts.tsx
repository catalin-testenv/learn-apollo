import { gql } from "@apollo/client";
export const getPosts = gql`
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
}
`;

export const getPost = gql`
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

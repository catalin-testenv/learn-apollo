import { gql } from "@apollo/client";
export default gql`
query GetUsers {
    users {
        totalCount
        nodes {
            id
            firstName
            lastName
            name
            posts {
                totalCount
                nodes {
                    id
                    title
                }
            }
            comments {
                id
                body
            }
        }
        
    }
}
`;

import { gql } from "@apollo/client";
export default gql`
query GetUsers {
    users {
        id
        firstName
        lastName
        name
    }
}
`;

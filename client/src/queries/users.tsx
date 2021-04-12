import { gql } from "@apollo/client";
export const getUsers = gql`
query GetUsers {
    users {
        totalCount
        nodes {
            id
            firstName
            lastName
            name
            iName @client
            hobby @client
            posts {
                totalCount
                nodes {
                    id
                    title
                }
            }
            comments {
                totalCount
                nodes {
                    id
                    body
                }
            }
        }
        
    }
}
`;

export const getUser = gql`
query GetUser($id: Int) {
  user(id: $id) {
    id
    firstName
    lastName
    name
      hobby @client
    posts {
        totalCount
        nodes {
            id
            title
            body
        }
    }
    comments {
        totalCount
        nodes {
            id
            body
            post {
                id
                title
            }
        }
    }
  }
}
`;

export const updateUser =  gql`
mutation UserUpdate($id: Int, $fields: UserUpdateFieldsInput) {
  updateUser(id: $id, fields: $fields) {
    id
    firstName
    lastName
    name
      hobby @client
  }
}
`;

export const addUser = gql`
mutation AddUser($fields: UserUpdateFieldsInput) {
  addUser(fields: $fields) {
    id
    firstName
    lastName
    name
      hobby @client
  }
}
`;



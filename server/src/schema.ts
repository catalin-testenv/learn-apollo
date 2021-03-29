import { gql } from 'apollo-server-express';

export default gql`
  type Post {
    id: ID!
    title: String!
    body: String!
    author: User
    comments: Comments
  }
  
  type Posts {
    totalCount: Int
    nodes: [Post]
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    name: String! # This is the computed full name of a user
    age: Float
    email: String
    posts: Posts
    comments: Comments
  }

  input UserUpdateFieldsInput {
    firstName: String
    lastName: String
    age: Float
    email: String
  }
  
  type Users {
    totalCount: Int
    nodes: [User]
  }
  
  type Comment {
    id: ID!
    body: String!
    author: User
    post: Post
  }
  
  type Comments {
    totalCount: Int
    nodes: [Comment]
  }

  type Query {
    users: Users
    user(id: Int): User
    posts: Posts
    post(id: Int): Post
    comments: Comments
    comment(id: Int): Comment
  }
  
  type Mutation {
    updateUser(id: Int, fields: UserUpdateFieldsInput): User
  }
`;

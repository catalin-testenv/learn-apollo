import { gql } from 'apollo-server-express';

export default gql`
  type Post {
    id: ID!
    title: String!
    body: String!
    author: User
    comments: [Comment]
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    name: String! # This is the computed full name of a user
    age: Float
    email: String
    posts: [Post]
    comments: [Comment]
  }
  
  type Comment {
    id: ID!
    body: String!
    author: User
    post: Post
  }

  type Query {
    users: [User]
    user(id: Int): User
    posts: [Post]
    post(id: Int): Post
    comments: [Comment]
    comment(id: Int): Comment
  }
`;

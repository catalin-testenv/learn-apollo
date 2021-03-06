import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  author?: Maybe<User>;
  comments?: Maybe<Comments>;
};

export type Posts = {
  __typename?: 'Posts';
  totalCount?: Maybe<Scalars['Int']>;
  nodes?: Maybe<Array<Maybe<Post>>>;
};

export type User = {
  __typename?: 'User';
  age?: Maybe<Scalars['Float']>;
  comments?: Maybe<Comments>;
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  hobby?: Maybe<Scalars['String']>;
  iName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  posts?: Maybe<Posts>;
};

export type UserUpdateFieldsInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
};

export type Users = {
  __typename?: 'Users';
  totalCount?: Maybe<Scalars['Int']>;
  nodes?: Maybe<Array<Maybe<User>>>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  body: Scalars['String'];
  author?: Maybe<User>;
  post?: Maybe<Post>;
};

export type Comments = {
  __typename?: 'Comments';
  totalCount?: Maybe<Scalars['Int']>;
  nodes?: Maybe<Array<Maybe<Comment>>>;
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<Users>;
  user?: Maybe<User>;
  posts?: Maybe<Posts>;
  post?: Maybe<Post>;
  comments?: Maybe<Comments>;
  comment?: Maybe<Comment>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryPostArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryCommentArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateUser?: Maybe<User>;
  addUser?: Maybe<User>;
};


export type MutationUpdateUserArgs = {
  id?: Maybe<Scalars['Int']>;
  fields?: Maybe<UserUpdateFieldsInput>;
};


export type MutationAddUserArgs = {
  fields?: Maybe<UserUpdateFieldsInput>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type NewUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'firstName' | 'lastName' | 'age'>
  & { posts?: Maybe<(
    { __typename?: 'Posts' }
    & Pick<Posts, 'totalCount'>
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title'>
    )>>> }
  )>, comments?: Maybe<(
    { __typename?: 'Comments' }
    & Pick<Comments, 'totalCount'>
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'body'>
    )>>> }
  )> }
);

export type GetCommentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCommentsQuery = (
  { __typename?: 'Query' }
  & { comments?: Maybe<(
    { __typename?: 'Comments' }
    & Pick<Comments, 'totalCount'>
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'body'>
      & { author?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      )>, post?: Maybe<(
        { __typename?: 'Post' }
        & Pick<Post, 'id' | 'title'>
      )> }
    )>>> }
  )> }
);

export type GetCommentQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;


export type GetCommentQuery = (
  { __typename?: 'Query' }
  & { comment?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'body'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    )>, post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title'>
    )> }
  )> }
);

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<(
    { __typename?: 'Posts' }
    & Pick<Posts, 'totalCount'>
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title'>
      & { author?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      )>, comments?: Maybe<(
        { __typename?: 'Comments' }
        & Pick<Comments, 'totalCount'>
        & { nodes?: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'body'>
          & { author?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id' | 'name'>
          )> }
        )>>> }
      )> }
    )>>> }
  )> }
);

export type GetPostQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    )>, comments?: Maybe<(
      { __typename?: 'Comments' }
      & Pick<Comments, 'totalCount'>
      & { nodes?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'body'>
        & { author?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'name'>
        )> }
      )>>> }
    )> }
  )> }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, 'totalCount'>
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName' | 'name' | 'iName' | 'hobby'>
      & { posts?: Maybe<(
        { __typename?: 'Posts' }
        & Pick<Posts, 'totalCount'>
        & { nodes?: Maybe<Array<Maybe<(
          { __typename?: 'Post' }
          & Pick<Post, 'id' | 'title'>
        )>>> }
      )>, comments?: Maybe<(
        { __typename?: 'Comments' }
        & Pick<Comments, 'totalCount'>
        & { nodes?: Maybe<Array<Maybe<(
          { __typename?: 'Comment' }
          & Pick<Comment, 'id' | 'body'>
        )>>> }
      )> }
    )>>> }
  )> }
);

export type GetUserQueryVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'name' | 'hobby'>
    & { posts?: Maybe<(
      { __typename?: 'Posts' }
      & Pick<Posts, 'totalCount'>
      & { nodes?: Maybe<Array<Maybe<(
        { __typename?: 'Post' }
        & Pick<Post, 'id' | 'title' | 'body'>
      )>>> }
    )>, comments?: Maybe<(
      { __typename?: 'Comments' }
      & Pick<Comments, 'totalCount'>
      & { nodes?: Maybe<Array<Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id' | 'body'>
        & { post?: Maybe<(
          { __typename?: 'Post' }
          & Pick<Post, 'id' | 'title'>
        )> }
      )>>> }
    )> }
  )> }
);

export type UserUpdateMutationVariables = Exact<{
  id?: Maybe<Scalars['Int']>;
  fields?: Maybe<UserUpdateFieldsInput>;
}>;


export type UserUpdateMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'name' | 'hobby'>
  )> }
);

export type AddUserMutationVariables = Exact<{
  fields?: Maybe<UserUpdateFieldsInput>;
}>;


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & { addUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'name' | 'hobby'>
  )> }
);

export const NewUserFragmentDoc = gql`
    fragment NewUser on User {
  id
  firstName
  lastName
  age
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
    `;
export const GetCommentsDocument = gql`
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

/**
 * __useGetCommentsQuery__
 *
 * To run a query within a React component, call `useGetCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCommentsQuery(baseOptions?: Apollo.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
        return Apollo.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, baseOptions);
      }
export function useGetCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
          return Apollo.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, baseOptions);
        }
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export type GetCommentsLazyQueryHookResult = ReturnType<typeof useGetCommentsLazyQuery>;
export type GetCommentsQueryResult = Apollo.QueryResult<GetCommentsQuery, GetCommentsQueryVariables>;
export const GetCommentDocument = gql`
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

/**
 * __useGetCommentQuery__
 *
 * To run a query within a React component, call `useGetCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCommentQuery(baseOptions?: Apollo.QueryHookOptions<GetCommentQuery, GetCommentQueryVariables>) {
        return Apollo.useQuery<GetCommentQuery, GetCommentQueryVariables>(GetCommentDocument, baseOptions);
      }
export function useGetCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentQuery, GetCommentQueryVariables>) {
          return Apollo.useLazyQuery<GetCommentQuery, GetCommentQueryVariables>(GetCommentDocument, baseOptions);
        }
export type GetCommentQueryHookResult = ReturnType<typeof useGetCommentQuery>;
export type GetCommentLazyQueryHookResult = ReturnType<typeof useGetCommentLazyQuery>;
export type GetCommentQueryResult = Apollo.QueryResult<GetCommentQuery, GetCommentQueryVariables>;
export const GetPostsDocument = gql`
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

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, baseOptions);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, baseOptions);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const GetPostDocument = gql`
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

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions?: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const GetUsersDocument = gql`
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

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserDocument = gql`
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

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const UserUpdateDocument = gql`
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
export type UserUpdateMutationFn = Apollo.MutationFunction<UserUpdateMutation, UserUpdateMutationVariables>;

/**
 * __useUserUpdateMutation__
 *
 * To run a mutation, you first call `useUserUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdateMutation, { data, loading, error }] = useUserUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      fields: // value for 'fields'
 *   },
 * });
 */
export function useUserUpdateMutation(baseOptions?: Apollo.MutationHookOptions<UserUpdateMutation, UserUpdateMutationVariables>) {
        return Apollo.useMutation<UserUpdateMutation, UserUpdateMutationVariables>(UserUpdateDocument, baseOptions);
      }
export type UserUpdateMutationHookResult = ReturnType<typeof useUserUpdateMutation>;
export type UserUpdateMutationResult = Apollo.MutationResult<UserUpdateMutation>;
export type UserUpdateMutationOptions = Apollo.BaseMutationOptions<UserUpdateMutation, UserUpdateMutationVariables>;
export const AddUserDocument = gql`
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
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      fields: // value for 'fields'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, baseOptions);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
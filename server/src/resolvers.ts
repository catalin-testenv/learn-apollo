import { User, Users, Post, Posts, Comment } from './database';
type Context = {
    knex: any;
};

// ==================== POST =================================

type PostArguments = {
    id: number;
};

const selectPost = ['id', 'authorId', 'title', 'body'];

async function getPost(
    _: any,
    { id }: PostArguments,
    { knex }: Context
): Promise<Post | undefined> {
    const posts = await knex('posts')
        .where('id', id)
        .select(...selectPost);
    return posts[0];
}

async function getPosts(
    _: any,
    {}: any,
    { knex }: Context
): Promise<Posts> {
    const posts =  await knex('posts')
        .select(...selectPost);
    return {
        totalCount: posts.length,
        nodes: posts
    }
}

async function getPostsByUser(
    { id }: User,
    {}: any,
    { knex }: Context
): Promise<Posts> {
    const posts = await knex('posts')
        .where('authorId', id)
        .select(...selectPost);
    return {
        totalCount: posts.length,
        nodes: posts
    }
}

async function getPostByComment(
    { postId }: Comment,
    {}: any,
    { knex }: Context
): Promise<Post | undefined> {
    return getPost(null, { id: postId }, { knex });
}

// ==================== USER =================================

type UserArguments = {
    id: number;
};

const selectUser = ['id', 'firstName', 'lastName', 'age', 'email'];

async function getUser(
    _: any,
    { id }: UserArguments,
    { knex }: Context
): Promise<User | undefined> {
    const users = await knex('users')
        .where('id', id)
        .select(...selectUser);
    return users[0];
}

async function getUsers(
    _: any,
    {}: any,
    { knex }: Context
): Promise<Users> {
    const users = await knex('users')
        .select(...selectUser);
    return {
        totalCount: users.length,
        nodes: users
    };
}

function computeName(user: User, args:any, context:any, info:any): string {
    return `${user.firstName} ${user.lastName}`;
}

async function getAuthorByPost(
    { authorId }: Post,
    {}: any,
    { knex }: Context
): Promise<User | undefined> {
    return getUser(null, { id: authorId }, { knex });
}

async function getAuthorByComment(
    { authorId }: Comment,
    {}: any,
    { knex }: Context
): Promise<User | undefined> {
    return getUser(null, { id: authorId }, { knex });
}

// ==================== COMMENT =================================

type CommentArguments = {
    id: number;
};

const selectComment = ['id', 'body', 'authorId', 'postId'];

async function getComment(
    _: any,
    { id }: CommentArguments,
    { knex }: Context
): Promise<Comment | undefined> {
    const comments = await knex('comments')
        .where('id', id)
        .select(...selectComment);
    return comments[0];
}

async function getComments(
    _: any,
    {}: any,
    { knex }: Context
): Promise<Array<Comment>> {
    const comments = await knex('comments')
        .select(...selectComment);
    return comments;
}

async function getCommentsByUser(
    { id }: User,
    {}: any,
    { knex }: Context
): Promise<Array<Comment>> {
    const comments = await knex('comments')
        .where('authorId', id)
        .select(...selectComment);
    return comments;
}

async function getCommentsByPost(
    { id }: Post,
    {}: any,
    { knex }: Context
): Promise<Array<Comment>> {
    const comments = await knex('comments')
        .where('postId', id)
        .select(...selectComment);
    return comments;
}

// ==================== RESOLVERS =================================

const resolvers = {
    User: {
        name: computeName,
        posts: getPostsByUser,
        comments: getCommentsByUser,
    },

    Post: {
        author: getAuthorByPost,
        comments: getCommentsByPost,
    },

    Comment: {
        author: getAuthorByComment,
        post: getPostByComment
    },

    Query: {
        users: getUsers,
        user: getUser,
        posts: getPosts,
        post: getPost,
        comments: getComments,
        comment: getComment
    },
};

export default resolvers;

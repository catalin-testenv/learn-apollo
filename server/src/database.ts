
export type User = {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    email?: string | null
}

export type Users = {
    totalCount: number,
    nodes: User[]
}

export type Post = {
    id: number,
    authorId: number,
    title: string,
    body: string,
}

export type Posts = {
    totalCount: number,
    nodes: Post[]
}

export type Comment = {
    id: number,
    authorId: number,
    postId: number,
    body: string,
}

export type Comments = {
    totalCount: number,
    nodes: Comment[]
}

let knex: any = null;

async function startDatabase() {
  if (!knex) {
    knex = require('knex')({
      client: 'sqlite3',
      connection: {
        filename: ':memory:',
      },
      useNullAsDefault: true,
    });

    await createDatabase(knex);

    console.log('database initialized');
  }

  return knex;
}

async function createDatabase(knex: any) {
    await knex.schema
    .createTable('users', (table: any) => {
      table.increments('id');
      table.string('firstName');
      table.string('lastName');
      table.float('age');
      table.string('email');
    })
    .createTable('posts', (table: any) => {
      table.increments('id');
      table.string('title');
      table.string('body');
      table.integer('authorId').unsigned().references('users.id');
    })
    .createTable('comments', (table: any) => {
      table.increments('id');
      table.string('body');
      table.integer('postId').unsigned().references('posts.id');
      table.integer('authorId').unsigned().references('users.id');
    });

    await knex('users').insert([
    { id: 1, firstName: 'Mister', lastName: 'Roro', age: 37.5, email: 'mister_roro@gmail.com' },
    { id: 2, firstName: 'Styled', lastName: 'West', age: 38.5, email: 'styled_west@gmail.com' },
    { id: 3, firstName: 'Daddy', lastName: 'Ice', age: 39, email: 'daddy_ice@gmail.com' },
    ]);

    await knex('posts').insert([
    { id: 1, title: 'Awesome tunes', body: 'lorem ipsum 1',  authorId: 1 },
    { id: 2, title: 'Starry Window', body: 'lorem ipsum 2', authorId: 2 },
    { id: 3, title: 'Upbeat vocals', body: 'lorem ipsum 3', authorId: 2 },
    { id: 4, title: 'Rotten', body: 'lorem ipsum 4', authorId: 3 },
    ]);

    await knex('comments').insert([
        { id: 1, body: 'comment 1', authorId: 2, postId: 1 },
        { id: 2, body: 'comment 2', authorId: 1, postId: 2 },
    ]);
    return true;
}

export default startDatabase;

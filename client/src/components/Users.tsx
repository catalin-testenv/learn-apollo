
import React, { useState } from "react";
import { gql } from "@apollo/client";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddUser, { User } from "./AddUser";
import { useGetUsersQuery, useAddUserMutation, GetUsersDocument, GetUsersQueryResult, GetUserDocument } from '../graphql';


const Users = () => {
    const { data, loading, error } = useGetUsersQuery({
        variables: {},
    });
    const [addUserMutation, { data: newUser, loading: userAdding, error: userAddError }] = useAddUserMutation({
        update(cache, { data }) {
            const newUser = data?.addUser;
            // const currentUsers: any = cache.readQuery({query: GetUsersDocument}) as GetUsersQueryResult;
            // cache.writeQuery({
            //     query: GetUsersDocument,
            //     data: {
            //         users: {
            //             totalCount: currentUsers.users.totalCount + 1,
            //             nodes: [
            //                 ...currentUsers.users.nodes,
            //                 {
            //                     ...newUser,
            //                     posts: [],
            //                     comments: []
            //                 },
            //             ]
            //
            //         }
            //     },
            // });

            cache.modify({
                fields: {
                    users(existingUsers = {}) {
                        const newUserRef = cache.writeFragment({
                            data: {
                                ...newUser,
                                posts: [],
                                comments: []
                            },
                            fragment: gql`
                                fragment NewUser on User {
                                  id
                                  firstName
                                  lastName
                                  age,
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
                              `
                        });

                        const ret = {
                            totalCount: existingUsers.totalCount + 1,
                            nodes: [...existingUsers.nodes, newUserRef],
                        }
                        return ret;
                    }
                }
            });
        }
    });

    const onUserAdded = (user: User) => {
        addUserMutation({
            variables: { fields: user }
        });
    }

    const toRender = <div>Users ({data?.users?.totalCount}): <ul className="bg-gray-300">
        {data?.users?.nodes?.map(
            (user) =>
                <li className="" key={user?.id}>
                    <Link to={`/users/${user?.id}`}>{user?.name}  {user?.iName} ({ user?.hobby })</Link>
                    {user?.posts?.nodes && <ul>
                        {user.posts.nodes.map((post) => <li key={post?.id}>
                            {post?.title}
                        </li>)}
                    </ul>}
                </li>
        )}
    </ul></div>;

    return (
        loading ? <span>loading</span> : error ? <span>error</span> :
            <div>
                <ul>
                    {toRender}
                    <li key={'addUser'}><AddUser onUserAdded={onUserAdded} /></li>
                </ul>
            </div>
    );
};

export default Users;

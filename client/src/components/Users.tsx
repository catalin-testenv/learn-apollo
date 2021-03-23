
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useGetUsersQuery } from '../graphql';


const Users = () => {
    const { data, loading, error } = useGetUsersQuery({
        variables: {},
    });

    const toRender = <div>Users: <ul>
        {data?.users?.map(
            (user) =>
                <li key={user?.id}>
                    <Link to={`/users/${user?.id}`}>{user?.name}</Link>
                    {user?.posts && <ul>
                        {user.posts.map((post) => <li>
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
                </ul>
            </div>
    );
};

export default Users;
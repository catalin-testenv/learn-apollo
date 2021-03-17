import "./App.css";
import React, { useState } from "react";
import { useGetUsersQuery, useGetUserQuery } from './graphql';


export default () => {
    const { data, loading, error } = useGetUsersQuery({
        variables: {},
    });
    console.log({ data, error });
    const toRender = <ul>
        {data?.users?.map((user,id) => <li key={id}>{user?.name}</li>)}
    </ul>;

    // const { data, loading, error } = useGetUserQuery({
    //     variables: { id: 1 },
    // });
    // console.log({ data, error });
    // const toRender = <div>
    //     {data?.user?.name}
    //     <ul>
    //         {data?.user?.posts?.map((post, id) => <li key={id}>{post?.title}</li>)}
    //     </ul>
    // </div>;

    return (
        loading ? <span>loading</span> : error ? <span>error</span> :
            <div>
                <ul>
                    {toRender}
                </ul>
            </div>
    );
};

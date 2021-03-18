
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useParams
} from "react-router-dom";
import { useGetPostQuery } from '../graphql';


const Posts = () => {
    const params = useParams<{ id: string }>();
    const { id } = params;
    const { data, loading, error } = useGetPostQuery({
        variables: { id: +id },
    });

    const toRender = <div>
        <p>Post: <b>{data?.post?.title}</b></p>
        <div>{data?.post?.body}</div>
        <p>Author: <Link to={`/users/${data?.post?.author?.id}`}>{data?.post?.author?.name}</Link></p>
    </div>;

    return (
        loading ? <span>loading</span> : error ? <span>error</span> :
            <div>
                <ul>
                    {toRender}
                </ul>
            </div>
    );
};

export default Posts;

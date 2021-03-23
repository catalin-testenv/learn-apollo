
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useGetPostsQuery } from '../graphql';


const Posts = () => {
    const { data, loading, error } = useGetPostsQuery({
        variables: {},
    });

    const toRender = <div>Posts ({ data?.posts?.totalCount }): <ul>
        {data?.posts?.nodes?.map(
            (post) =>
                <li key={post?.id}>
                    <Link to={`/posts/${post?.id}`}>{post?.title}</Link>
                    {post?.author && <Link to={`/users/${post?.author?.id}`}> ({post?.author?.name}) </Link>}
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

export default Posts;

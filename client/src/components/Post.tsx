
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useParams
} from "react-router-dom";
import { useGetPostQuery } from '../graphql';


const Post = () => {
    const params = useParams<{ id: string }>();
    const { id } = params;
    const { data, loading, error } = useGetPostQuery({
        variables: { id: +id },
    });

    const comments = <div>Comments ({ data?.post?.comments?.totalCount }): <ul>
        {data?.post?.comments?.nodes?.map(
            (comment) =>
                <li key={comment?.id}>
                    <Link to={`/comments/${comment?.id}`}>Comment: {comment?.id}</Link> {' '}
                    (<Link to={`/users/${comment?.author?.id}`}>By: {comment?.author?.name}</Link>)
                    <div>{comment?.body}</div>
                </li>
        )}
    </ul></div>;

    const toRender = <div>
        <p>Post: <b>{data?.post?.title}</b></p>
        <div>{data?.post?.body}</div>
        <p>Author: <Link to={`/users/${data?.post?.author?.id}`}>{data?.post?.author?.name}</Link></p>
        {comments}
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

export default Post;


import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useParams
} from "react-router-dom";
import { useGetCommentQuery } from '../graphql';


const Comment = () => {
    const params = useParams<{ id: string }>();
    const { id } = params;
    const { data, loading, error } = useGetCommentQuery({
        variables: { id: +id },
    });

    const toRender = <div>
        <p>Comment: <b>{data?.comment?.id}</b></p>
        <div>{data?.comment?.body}</div>
        <p>Author: <Link to={`/users/${data?.comment?.author?.id}`}>{data?.comment?.author?.name}</Link></p>
        <p>Post: <Link to={`/posts/${data?.comment?.post?.id}`}>{data?.comment?.post?.title}</Link></p>
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

export default Comment;

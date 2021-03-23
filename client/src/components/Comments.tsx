
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useGetCommentsQuery } from '../graphql';


const Comments = () => {
    const { data, loading, error } = useGetCommentsQuery({
        variables: {},
    });

    const toRender = <div>Comments: <ul>
        {data?.comments?.map(
            (comment) =>
                <li key={comment?.id}>
                    <Link to={`/comments/${comment?.id}`}>{comment?.id}</Link>
                    {comment?.author && <Link to={`/users/${comment?.author?.id}`}> ({comment?.author?.name}) </Link>}
                    {comment?.post && <Link to={`/posts/${comment?.post?.id}`}> ({comment?.post?.title}) </Link>}
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

export default Comments;

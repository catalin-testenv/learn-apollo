
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { useGetUserQuery } from '../graphql';


const User = () => {
    const params = useParams<{ id: string }>();
    const { id } = params;
    const { data, loading, error } = useGetUserQuery({
        variables: { id: +id },
    });

    const toRender = <div>
        <p>User: <b>{data?.user?.name}</b></p>
        {data?.user?.posts?.nodes && <div>
            <p>Posts ({ data?.user?.posts.totalCount }): </p>
            <ul>
                {data.user.posts.nodes.map((post) =>
                    <li key={post?.id}><Link to={`/posts/${post?.id}`}>{post?.title}</Link></li>
                )}
            </ul>
        </div>}
        {data?.user?.comments && <div>
            <p>Comments: </p>
            <ul>
                {data.user.comments.map((comment) =>
                    <li key={comment?.id}><Link to={`/comments/${comment?.id}`}>{comment?.id} for {comment?.post?.title}</Link></li>
                )}
            </ul>
        </div>}

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

export default User;

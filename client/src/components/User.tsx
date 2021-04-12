
import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { useGetUserQuery, useUserUpdateMutation } from '../graphql';
import { hobby } from "../index";


const User = () => {

    const params = useParams<{ id: string }>();
    const { id } = params;
    const { data: userData, loading: userLoading, error: userError } = useGetUserQuery({
        variables: { id: +id },
    });

    const [firstName, setFirstName] = useState(userData?.user?.firstName || '');
    const [lastName, setLastName] = useState(userData?.user?.lastName || '');

    useEffect(() => {
        if (!userLoading) {
            setFirstName(userData?.user?.firstName || '');
            setLastName(userData?.user?.lastName || '');
        }
    }, [userLoading]);

     const [userUpdateMutation, { loading: userUpdateLoading }] = useUserUpdateMutation();

     const updateUser = () => {
         userUpdateMutation({
             variables: {
                 id: +id, // value for 'id'
                 fields: { firstName, lastName } // value for 'fields'
             },
         });
     }

     const userUpdateForm = <div>
         <input disabled={userUpdateLoading} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
         <input disabled={userUpdateLoading} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
         <input disabled={userUpdateLoading} value={userData?.user?.hobby || ''} onChange={(e) => hobby({...hobby(), [id]: e.target.value})}/>
         <button disabled={userUpdateLoading} onClick={updateUser}>Submit</button>
     </div>

    const toRender = <div>
        {userUpdateForm}
        <p>User: <b>{userData?.user?.firstName}</b> <b>{userData?.user?.lastName}</b> ({ userData?.user?.hobby })</p>
        {userData?.user?.posts?.nodes && <div>
            <p>Posts ({ userData?.user?.posts.totalCount }): </p>
            <ul>
                {userData.user.posts.nodes.map((post) =>
                    <li key={post?.id}><Link to={`/posts/${post?.id}`}>{post?.title}</Link></li>
                )}
            </ul>
        </div>}
        {userData?.user?.comments?.nodes && <div>
            <p>Comments ({ userData?.user?.comments?.totalCount }): </p>
            <ul>
                {userData.user.comments.nodes.map((comment) =>
                    <li key={comment?.id}><Link to={`/comments/${comment?.id}`}>{comment?.id} for {comment?.post?.title}</Link></li>
                )}
            </ul>
        </div>}

    </div>;

    return (
        userLoading ? <span>loading</span> : userError ? <span>error</span> :
            <div>
                <ul>
                    {toRender}
                </ul>
            </div>
    );
};

export default User;

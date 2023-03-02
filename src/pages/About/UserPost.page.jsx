import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user.context";
import Posts from "../../utils/Post.utils";
import { UserPostContext } from "../../context/UserPost.context";

const UserPosts = () => {
    const url = import.meta.env.VITE_APP_WEBSITE; 
    const user = useContext(UserContext);
    const [userPost, setUserPost] = useState(null);
    const [dataUpdated, setDataUpdate] = useState(false);

    const getNewData = () => {
        fetch(url + "Post/" + user.user._id, {
            credentials: 'include',
        })
        .then(data => data.json())
        .then(data => setUserPost(data))
        .catch(err => console.log(err));
    }

    useEffect(() => {
        let isCancelled = false;
        fetch(url + "Post/" + user.user._id, {
            credentials: 'include',
        })
        .then(data => data.json())
        .then(data => {
            if (!isCancelled) {
                setUserPost(data);
            }
        })
        .catch(err => console.log(err))

        return () => {
            isCancelled = true;
        }
    }, []);

    return (
        <div>
            <Posts data={userPost} getNewData={getNewData}/>
        </div>
    )
}

export default UserPosts;
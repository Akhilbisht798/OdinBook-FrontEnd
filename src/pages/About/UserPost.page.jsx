import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user.context";
import Posts from "../../utils/Post.utils";
import { UserPostContext } from "../../context/UserPost.context";

const UserPosts = () => {
    const user = useContext(UserContext);
    const [userPost, setUserPost] = useState(null);
    // const {userPosts, setUserPost} = useContext(UserPostContext);

    useEffect(() => {
        let isCancelled = false;
        const url = import.meta.env.VITE_APP_WEBSITE; 
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
            {console.log(userPost)}
            <Posts data={userPost}/>
        </div>
    )
}

export default UserPosts;
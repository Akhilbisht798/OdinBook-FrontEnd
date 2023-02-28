import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/user.context";
import { PostContext } from "../../context/post.context";
import { v4 as uuid} from 'uuid'

const AllFrindPost = () => {

    const user = useContext(UserContext);
    const { post, setPost } = useContext(PostContext);

    const getPostData = async () => {
        const url = import.meta.env.VITE_APP_WEBSITE;
        let posts = [];
        await Promise.all(user.user.friend.map((curr) => {
            fetch(url + "Post/" + curr, {
                credentials: 'include'
            })
            .then(data => data.json())
            .then(data => posts.push(data))
            .catch(err => console.log(err));
        }));
        console.log(posts);
    }

    useEffect(() => {
        getPostData(); 
    })

    return (
        <>
            THis All Post.
        </>
    )
}

export default AllFrindPost;
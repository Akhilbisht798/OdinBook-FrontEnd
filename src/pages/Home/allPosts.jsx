import React, { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { PostContext } from "../../context/post.context";

const AllFrindPost = () => {

    const user = useContext(UserContext);
    const { post, setPost } = useContext(PostContext);

    const getAllFriendPost = async () => {
        try {
            const url = import.meta.env.VITE_APP_WEBSITE + 'Post/';
            let posts = [];
            await fetch(user.user.friend.map(e => url + e), { 
                credentials: 'include'
            })
            .then(data => data.json())
            .then(data => {
                posts = posts.concat(data);
            })
            getAllAuthorDetails(posts);
            setPost(posts);
        } catch (err) {
            console.log(err);
        }
    }

    const getAllAuthorDetails = async (post) => {
        try {
            const url = import.meta.env.VITE_APP_WEBSITE;
            await post.map((curr, index) => {
                fetch(url + curr.author)
                    .then(data => data.json())
                    .then(data => {
                        // console.log(data);
                        post[index].user = data.user;
                    })
            });
        } catch (err) {
            console.log(err);
        }
    }

    post === null ? getAllFriendPost() : null;

    return (
        <div>
            {
                post !== null ?
                post.map((curr, index) => {
                    console.log(curr)
                }) : <div>Such an Empty Place.</div>
            }
        </div>
    )
}

export default AllFrindPost;
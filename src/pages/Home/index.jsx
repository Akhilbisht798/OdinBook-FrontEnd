import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../context/post.context";
import { UserContext } from "../../context/user.context";
import AllFrindPost from "./allPosts";

const Home = () => {
    /**
     * contain Curr user friends posts.
     * contain a header with user detail.
     */

    const user = useContext(UserContext); // curr User.
    const [post, setPost] = useState(null);

    return (
        <PostContext.Provider value={{post, setPost}}>
            <div>
                <AllFrindPost />
            </div>
        </PostContext.Provider>
    )
}

export default Home;

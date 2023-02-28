import React, { useContext, useState } from "react";
import { UserContext } from "../../context/user.context";
import { UserFriend } from "../../context/UserFriend.context";
import { UserPostContext } from "../../context/UserPost.context";
import UserPosts from "./UserPost.page";

const About = () => {
    /**
     * Data I need.
     * - User Post.
     * - User Friends.
     * - User Data.
     * - Ability to write a post.
     */

    // const user = useContext(UserContext);
    // const [userPosts, setUserPost] = useState(null);
    // const [userFriend, setUserFriend] = useState(null);

    return (
        // <UserPostContext.Provider value={{userPosts, setUserPost}}>
        //     <UserFriend.Provider value={{userFriend, setUserFriend}}>
                <div>
                    <UserPosts />
                </div>
        //     </UserFriend.Provider>
        // </UserPostContext.Provider>
    )
}

export default About;
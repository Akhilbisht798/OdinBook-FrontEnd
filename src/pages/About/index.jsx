import React, { useContext, useState } from "react";
import { UserContext } from "../../context/user.context";
import { UserFriend } from "../../context/UserFriend.context";
import { UserPostContext } from "../../context/UserPost.context";
import UserPosts from "./UserPost.page";
import AboutUserFriend from "./UserFriend";

const About = () => {
    return (
        <div className=" grid grid-cols-7 gap-5 p-16">
            <div className=" col-start-1 col-end-3">
                <AboutUserFriend />
            </div>
            <div className=" col-start-3 col-end-7">
                <UserPosts />
            </div>
        </div>
    )
}

export default About;
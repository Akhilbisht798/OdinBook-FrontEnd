import React, { useContext, useState } from "react";
import UserPosts from "./UserPost.page";
import AboutUserFriend from "./UserFriend";
import AboutUserDetail from "./Userdetail";

const About = () => {
    return (
        <>
            <AboutUserDetail />
            <div className=" grid grid-cols-7 gap-5 p-16">
                <div className=" col-start-1 col-end-3">
                    <AboutUserFriend />
                </div>
                <div className=" col-start-3 col-end-7">
                    <UserPosts />
                </div>
            </div>
        </>
    )
}

export default About;
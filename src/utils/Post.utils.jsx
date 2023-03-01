import React, { useContext, useState } from "react";
import { UserContext } from "../context/user.context";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

/**
 * Takes 2 props
 *  1. Data
 *  2. getNewData - get New Updated Data.
 */
const Posts = (props) => {
    const user = useContext(UserContext);
    const url = import.meta.env.VITE_APP_WEBSITE;

    const LikePost = (id) => {
        console.log(id);
        fetch(url + "Post/like/" + id, {
            method: "POST",
            credentials: "include"
        }).then(data => data.json())
        .then(data => {
            if (data?.acknowledged) props.getNewData();
        })
        .catch(err => err);
    }

    const UnLikePost = (id) => {
        console.log(id);
        fetch(url + "Post/like/" + id, {
            method: "DELETE",
            credentials: "include"
        }).then(data => data.json())
        .then(data => {
            if (data?.acknowledged) props.getNewData();
        })
        .catch(err => err);
    }

    return (
        <div className=" flex items-center justify-center gap-4 p-3 flex-col">
            {console.log(props.data)}
            {props.data !== null ? 
                props.data.map((curr) => {
                    return (
                        <div className=" shadow-md p-12 w-3/5 gap-32" key={curr._id}
                            data-id={curr._id}
                        >

                            <div className=" flex items-center gap-7">
                                <img src="https://i.pinimg.com/280x280_RS/e5/ba/ec/e5baec240551420bb631f2787e083290.jpg" 
                                    className=" w-16 rounded-full"
                                />
                                <p className=" font-semibold font-sans">{curr.author.email}</p>
                            </div>

                            <div className=" font-mono text-base text-left">
                                <p className=" text-left">{curr.content}</p>
                                <img src={curr?.img} />
                            </div>
                            <div>
                                {curr.likes.includes(user.user._id) ? 
                                    <AiFillHeart onClick={() => {UnLikePost(curr._id)}}/> :
                                    <AiOutlineHeart onClick={() => {LikePost(curr._id)}}/>
                                }
                            </div>
                        </div>
                    )
                }) :
                <div className=" font-serif text-xl">No Posts to Show!</div>
            }
        </div>
    )
}

export default Posts;
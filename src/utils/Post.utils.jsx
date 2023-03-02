import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user.context";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import Comments from "./Comment.utils";
import { MdSend } from "react-icons/md"

/**
 * Takes 2 props
 *  1. Data
 *  2. getNewData - get New Updated Data.
 */
const Posts = (props) => {
    const user = useContext(UserContext);
    const [openComments, setOpenComments] = useState(() => false);
    const [commentIndex, setCommentIndex] = useState(0);
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

    const AddPost = (e) => {
        e.preventDefault();
        const data = {
            content: e.target.content.value,
        }
        console.log(e.target.content.value);
        fetch(url + "Post/", {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(data => data.json())
        .then(data => {
            if (data?.author) props.getNewData();
        })
        .catch(err => console.log(err));
    }

    const toggleComments = (id) => {
        setOpenComments(!openComments);
        setCommentIndex(id);
    }

    return (
        <div className=" flex items-center justify-center gap-4 p-3 flex-col">
            <div className=" flex w-3/5 items-center justify-evenly">
                <img src="https://i.pinimg.com/280x280_RS/e5/ba/ec/e5baec240551420bb631f2787e083290.jpg" 
                                    className=" w-16 rounded-full"/>
                <form onSubmit={AddPost}>
                    <textarea type="text" placeholder="Enter Something in your mind" rows="4" cols="50"
                        className=" rounded-md shadow-md" name="content"
                    />
                    <button type="submit"><MdSend /></button>
                </form>

            </div>
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
                            <div className=" flex items-center justify-start gap-4">
                                <div className=" flex items-center justify-center">
                                    {curr.likes.includes(user.user._id) ? 
                                        <AiFillHeart cursor="pointer" onClick={() => {UnLikePost(curr._id)}}/> :
                                        <AiOutlineHeart cursor="pointer" onClick={() => {LikePost(curr._id)}}/>
                                    }
                                    <p>{curr.likes.length}</p>
                                </div>
                                <div>
                                    <BiCommentDetail cursor="pointer" onClick={() => {toggleComments(curr._id)}}/>
                                    {/* {console.log(openComments)} */}
                                    
                                </div>
                            </div>
                            <div>
                                {openComments && commentIndex === curr._id ? <Comments id={curr._id}/> 
                                    : null}
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
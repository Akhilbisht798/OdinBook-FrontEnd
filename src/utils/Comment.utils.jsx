import React, { useEffect, useState } from "react";
import { MdSend } from "react-icons/md";

/**
 * Take 1 Props
 * id
 */
const Comments = (props) => {
    const url = import.meta.env.VITE_APP_WEBSITE;
    const [comments, setComments] = useState(null);

    const AddComment = (e) => {
        e.preventDefault();
        fetch(url + "Post/Comment/" + props.id, {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: e.target.content.value,
            })
        })
        .then(data => data.json())
        .then(data => {
            fetch(url + "Post/Comment/" + props.id, {
                credentials: "include"
            })
            .then(data => data.json())
            .then(data => setComments(data))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        let isCancelled = false;
        fetch(url + "Post/Comment/" + props.id, {
            credentials: "include"
        })
        .then(data => data.json())
        .then(data => {
            if (!isCancelled) setComments(data);
        })

        return () => {
            isCancelled = true;
        }
    }, []);

    return (
        <div className=" flex flex-col items-start gap-4">
            <div>
                <form onSubmit={AddComment}>
                    <textarea type="text" placeholder="Enter Something in your mind" rows="4" cols="50"
                        className=" rounded-md shadow-md" name="content"
                    />
                    <button type="submit"><MdSend /></button>
                </form>
            </div>
            {comments !== null && comments.length !== 0 ?
                comments.map((curr) => {
                    return (
                        <div className=" flex items-center flex-col">
                            <div className="flex items-center gap-3">
                                <img src={curr.author?.profilePic ? curr.author?.profilePic :
                                "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/440cba59e9a87fbcaab5b0f10b0a3702895e00d749afb9af13bf3000a837a478._RI_V_TTW_.jpg"} 
                                className=" w-16 rounded-full"
                                /> 
                                <p className=" font-semibold font-sans">{curr.author.email}</p>
                            </div>

                            <div>
                                <p>{curr.content}</p>
                            </div>
                        </div>
                    )
                }) : <div>No Comments Available.</div>
            }
        </div>
    )
}

export default Comments;
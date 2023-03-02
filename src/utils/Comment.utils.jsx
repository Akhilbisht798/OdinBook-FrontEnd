import React, { useEffect, useState } from "react";

const Comments = (props) => {
    const url = import.meta.env.VITE_APP_WEBSITE;
    const [comments, setComments] = useState(null);

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
        <div>
            {
            comments !== null && comments.length !== 0 ?
                comments.map((curr) => {
                    return (
                        <div className=" flex items-center">
                            <button onClick={props.close}>X</button>
                            <div>This is Comment</div>
                            <div>
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
import React from "react";

const Posts = (props) => {
    return (
        <div className=" flex items-center justify-center gap-4 p-3 flex-col">
            {console.log(props.data)}
            {props.data !== null ? 
                props.data.map((curr) => {
                    return (
                        <div className=" shadow-xl p-12">
                            <div className=" font-mono text-base text-left">
                                <p className=" text-left">{curr.content}</p>
                            </div>
                            <div>

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
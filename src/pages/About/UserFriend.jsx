import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user.context";
import useFetch from "../../hooks/useFetch";

const AboutUserFriend = () => {
    const url = import.meta.env.VITE_APP_WEBSITE;
    const user = useContext(UserContext);
    const urls = user.user.friend.map((curr) => url + curr);
    const { data, loading, error, refresh} = useFetch(urls);

    if (loading) return <div>Loading...</div>

    return (
        <div className=" shadow-lg">
            {data !== null && data.length > 0 ? 
                <div className=" flex items-center justify-center flex-col gap-6">
                    <div>
                        <span className=" text-xl ">Total Friend: {data.length}</span>
                    </div>
                    {data.map((curr) => {
                        return (
                            <div className=" border-y-4 flex flex-col items-center gap-6 w-4/5 p-5">
                                <div className=" flex items-center gap-7 justify-evenly">
                                    <img src="https://i.pinimg.com/280x280_RS/e5/ba/ec/e5baec240551420bb631f2787e083290.jpg" 
                                        className=" w-16 rounded-full"
                                    />
                                    <p className=" font-semibold font-sans">{curr.email}</p>
                                </div>
                            </div>
                        )
                    })} 
                </div>
                : <div>No Friends</div>
            }
        </div>
    )
}

export default AboutUserFriend;
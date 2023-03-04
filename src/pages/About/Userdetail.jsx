import React, { useContext } from "react";
import { UserContext } from "../../context/user.context";

const AboutUserDetail = () => {
    const user = useContext(UserContext);

    return (
        <div className=" flex items-center gap-7 p-7">
            <img src="https://i.pinimg.com/280x280_RS/e5/ba/ec/e5baec240551420bb631f2787e083290.jpg" 
                className=" w-28 rounded-full"
            />
            <div>
                <p className=" font-bold text-4xl font-sans">{user.user.email}</p>
                <p className=" font-semibold text-sm font-mono">{user.user?.username}</p>
            </div>
        </div>
    )
}

export default AboutUserDetail;
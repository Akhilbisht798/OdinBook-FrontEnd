import React, { useContext, useState } from "react";
import { UserContext } from "../../context/user.context";
import { SlPeople } from "react-icons/sl";
import FriendRequest from "./FriendRequest";

const Navbar = () => {

    const User = useContext(UserContext);
    const [showRequest, setShowRequest] = useState(false);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

    const handleClick = (event) => {
        setClickPosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <div className="grid grid-cols-2 p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <div>
                // Logo Goes Here.
            </div>
            <div className=" flex items-center justify-evenly">
                <a href="/about" className="font-sans text-2xl">{User.user.email}</a>
                <SlPeople className=" w-9" cursor="pointer" onClick={() => {setShowRequest(!showRequest)}}/>
                <div className=" absolute ">
                    {showRequest ? 
                        <FriendRequest /> 
                        : null}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
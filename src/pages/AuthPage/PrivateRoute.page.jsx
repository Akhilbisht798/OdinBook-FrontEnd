import React, { useContext, useState } from "react";
import { Navigate, Outlet, useLoaderData } from 'react-router-dom'
import { UserContext } from "../../context/user.context";

const PrivateRoute = () => {

    const auth = useLoaderData();
    const [user, setUser] = useState(auth);

    return (
        <>
        <UserContext.Provider value={{user, setUser}}>
            {auth !== null ? <Outlet /> 
                : <Navigate to="/login" />}
        </UserContext.Provider>
        </>
    )
}

export const PrivateRouteLoader = async () => {
    return fetch(import.meta.env.VITE_APP_WEBSITE + "Post/verify", {
        credentials: "include",
    })
    .then(data => data.json())
    .then(data => {
        if (data && data.success) {
            return data.user;
        }
        return null;
    })
    .catch(err => {return null})
}

export default PrivateRoute;
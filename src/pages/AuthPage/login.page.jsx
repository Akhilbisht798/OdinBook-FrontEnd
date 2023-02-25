import React, { useState } from "react";
import { useContext } from "react"
import { UserContext } from "../../context/user.context"

const Login = () => {

    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform authentication here with the provided email and password
        const site = import.meta.env.VITE_APP_WEBSITE;
        const data = {
            email: email,
            password: password
        }
        const reqHandle = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        }
        fetch(site + "login", reqHandle)
            .then(res => {
              const cookieHeader = res.headers.get('Set-Cookie')
              if (cookieHeader) {
                document.cookie = cookieHeader + "SameSite=None; Secure";
                }
                return res;
            })
            .then(data => data.json())
            .then(data => {
                setUser(data.user);
            })
            .catch((err) => {console.log(err)});
      };
    

    return (
        <div className=" w-screen h-screen bg-black flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-medium mb-4">Login</h2>
                <div className="mb-4">
                    <label className="block font-medium mb-2" htmlFor="email">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    className="border p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-2" htmlFor="password">
                    Password
                    </label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    className="border p-2 w-full"
                    />
                </div>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;
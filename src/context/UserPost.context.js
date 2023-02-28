import { createContext } from "react";

export const UserPostContext = createContext({
    post: null,
    setUserPost: (post) => {}
});
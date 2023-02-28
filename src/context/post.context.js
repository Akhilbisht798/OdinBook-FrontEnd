import { createContext } from "react";

export const PostContext = createContext({
    post: null,
    setPost: (post) => {}
});
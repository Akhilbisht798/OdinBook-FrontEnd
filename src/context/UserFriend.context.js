import { createContext } from "react";

export const UserFriend = createContext({
    friend: null,
    setFriend: (friend) => {}
});
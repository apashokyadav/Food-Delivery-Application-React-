import { createContext } from "react";

const UserContext=createContext({
    user:{

        name: "",
        email: "",
        signin:false,
    }

});

export default UserContext;
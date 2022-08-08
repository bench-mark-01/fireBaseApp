import React, { createContext, useState, useContext } from "react";
import { onAuth, auth } from "../fireBase";

const AuthContext = createContext();

export const useAuthContext = () =>{
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) =>{
    const [user, setUser] = useState('');
    const value = {
        user,
    };

    onAuth(auth, (user) => {
        if(!user){
            setUser('Guest User');
            return;
        }
        setUser(user.displayName);
    });

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};



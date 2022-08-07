import React, { createContext, useState, useContext } from "react";
import { onAuth, auth } from "../fireBase";

const AuthContext = createContext();

export function useAuthContext(){
    return useContext(AuthContext);
};

export function AuthProvider({ children }){
    const [user, setUser] = useState('');
    const value = {
        user,
    };

    onAuth(auth, (user) => {
        if(user){
            setUser(user.displayName);
        }
        else{
            setUser('Guest User');
        }
    });

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};



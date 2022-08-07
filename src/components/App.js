import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import { SignUp } from './user/SignUp'
import { SignIn } from './user/SignIn';
import { AuthProvider } from './context/AuthContext'

export function Layout(){
    return(
        <AuthProvider>
            <BrowserRouter>
            <Routes>
                <Route exact path = '/' element = {<SignUp/>}/>
                <Route path = '/signin' element = {<SignIn/>}/>
            </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

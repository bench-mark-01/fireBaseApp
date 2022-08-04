import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import { SignUp } from './user/SignUp'
import { SignIn } from './user/SignIn';

export function Layout(){
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path = '/' element = {<SignUp/>}/>
            <Route path = '/signin' element = {<SignIn/>}/>
        </Routes>
        </BrowserRouter>
    )
}
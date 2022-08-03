import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import { SignUp } from './user/SignUp';

export function Layout(){
    return(
        <BrowserRouter>
        <Routes>
            <Route exact path = '/' element = {<SignUp/>}/>
        </Routes>
        </BrowserRouter>
    )
}
import React, { useState } from 'react';
import { auth, signIn } from '../fireBase';

export function SignIn(){
    const [userData, setUserData] = useState({
        mail: '',
        passWord: ''
    });

    const handleChange = e => {
        if(!e) return;

        switch(e.target.name){
            case 'mail':
                setUserData({...userData, mail: e.target.value});
                break;
            case 'passWord':
                setUserData({...userData, passWord: e.target.value});
                break;
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        signIn(auth, userData.mail, userData.passWord)
        .then(result =>{
            const user = result.user
            if(user){
                console.log('login');
                console.log(user);
            }
        })
        .catch(error =>{
            switch(error.code){
                case 'auth/invalid-email':
                    console.log('メールアドレスの形式が不正です')
                    break;
                case 'auth/user-not-found':
                console.log('メールアドレスまたはパスワードが違います')
                    break;
            }
        })
    }
    return(
    <>
        <form className='box'>
            <label className='label'>ユーザー名</label>
            <input className='input' type="text" name="userName" id="userName" onChange={ handleChange }/>
            <label className='label'>メールアドレス</label>
            <input className='input' type="email" name="mail" id="mail" onChange={ handleChange }/>
            <label className='label'>パスワード</label>
            <input className='input' type="password" name="passWord" id="passWord" onChange={ handleChange }/>
            <button className="button is-primary" onClick={ handleClick }>ログイン</button>
        </form>
    </>
    )
}
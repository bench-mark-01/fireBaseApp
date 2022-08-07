import React, { useState } from 'react';
import { auth, createUser, updateProfile } from '../fireBase';
import { Button } from '../Button';

export const SignUp = () =>{

    const [userData, setUserData] = useState({
        userName: '',
        mail: '',
        passWord: ''
    })
    const handleChange = e => {
        if(!e) return;
        switch(e.target.name){
            case 'userName':
                setUserData({...userData, userName: e.target.value});
                break;
            case 'mail':
                setUserData({...userData, mail: e.target.value});
                break;
            case 'passWord':
                setUserData({...userData, passWord: e.target.value});
                break;
        }
    };
    const handleClick = (e) => {
        e.preventDefault();
        createUser(auth, userData.mail, userData.passWord)
        .then( userCredential =>{
            const user = userCredential.user;
            if(user){
                updateProfile(auth.currentUser,{
                    displayName: userData.userName
                })
            }
        })
        .catch(error =>{
            switch(error.code){
                case 'auth/email-already-in-use':
                    console.log('既に使用されているメールアドレスです')
                    break;
                case 'auth/invalid-email':
                    console.log('メールアドレスの形式が不正です')
                    break;
            }
        });
    };
    return(
    <>
        <form className='box'>
            <label className='label'>登録フォーム</label>
            <label className='label'>ユーザー名</label>
            <input className='input' type="text" name="userName" id="userName" onChange={ handleChange }/>
            <label className='label'>メールアドレス</label>
            <input className='input' type="email" name="mail" id="mail" onChange={ handleChange }/>
            <label className='label'>パスワード</label>
            <input className='input' type="password" name="passWord" id="passWord" onChange={ handleChange }/>
            <Button event={handleClick} content='新規登録'/>
            <Button path={'/signin'} content='ログインフォーム' className='button is-link'/>
        </form>
    </>
    )
}
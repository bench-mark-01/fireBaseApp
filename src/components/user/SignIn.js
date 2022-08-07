import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { auth, signIn, signOut } from '../fireBase';
import { Button } from '../Button';

export const SignIn = () =>{
    const {user} = useAuthContext();
    const [inputUserData, setInputUserData] = useState({
        mail: '',
        passWord: ''
    })
    const handleChange = e => {
        if(!e) return;
        e.target.name === 'mail' ? setInputUserData({...inputUserData, mail: e.target.value}):setInputUserData({...inputUserData, passWord: e.target.value})
    }
    
    async function handleClick(e){
        e.preventDefault();
        await signIn(auth, inputUserData.mail, inputUserData.passWord)
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

    async function handleSignOut(){
        const session = await signOut(auth).catch(e => console.error(e));
    }

    return(
    <>
        <form className='box'>
            <label className='label'>ログインフォーム</label>
            <label className='label'>メールアドレス</label>
            <input className='input' type="email" name="mail" id="mail" onChange={handleChange}/>
            <label className='label'>パスワード</label>
            <input className='input' type="password" name="passWord" id="passWord" onChange={handleChange}/>
            <Button event={handleClick} content='ログイン'/>
            <Button path={'/'} content='新規登録フォーム' className='button is-link'/>
        </form>
        <label className='label'>セッション状態</label>
        <label className='label'>{user}</label>
        <Button event={handleSignOut} content='ログアウト'/>
    </>
    )
}
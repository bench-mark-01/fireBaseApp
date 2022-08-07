import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { auth, signIn, signOut } from '../fireBase';
import { Button } from '../Button';

export function SignIn(){
    const {user} = useAuthContext();
    const [inputUserData, setInputUserData] = useState({
        mail: '',
        passWord: ''
    })
    const handleChange = e => {
        if(!e) return;
        switch(e.target.name){
            case 'mail':
                setInputUserData({...inputUserData, mail: e.target.value});
                break;
            case 'passWord':
                setInputUserData({...inputUserData, passWord: e.target.value});
                break;
        }
    }
    const handleClick = (e) => {
        e.preventDefault();
        signIn(auth, inputUserData.mail, inputUserData.passWord)
        .then(userCredential =>{
            const currentUser = userCredential.user
            if(!currentUser) return;

            console.log('login');
            console.log(currentUser.displayName);
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
    const handleSignOut = () => {
        signOut(auth).then((result)=>{
            console.log('logout!')
        });
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
import React, { useState } from 'react';
import { auth, db, createUser } from '../fireBase';
import { collection, addDoc } from "firebase/firestore";

export function SignUp(){

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
        .then(result =>{
            const user = result.user
            if(user){
                const uid = user.uid;
                console.log('signup 成功'+ ' ' + user.email);
                addDoc(collection(db, "users"), {
                    uid: uid,
                    userName: userData.userName
                });
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
        })

    };
    return(
    <>
        <form className='box'>
            <label className='label'>ユーザー名</label>
            <input className='input' type="text" name="userName" id="userName" onChange={ handleChange }/>
            <label className='label'>メールアドレス</label>
            <input className='input' type="email" name="mail" id="mail" onChange={ handleChange }/>
            <label className='label'>パスワード</label>
            <input className='input' type="password" name="passWord" id="passWord" onChange={ handleChange }/>
            <button className="button is-primary" onClick={ handleClick }>新規登録</button>
        </form>
    </>
    )
}
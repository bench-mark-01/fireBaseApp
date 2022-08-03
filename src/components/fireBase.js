import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCAl6dequ3w6AIqsAKzQXFPEBn2Sf5l_Dw",
  authDomain: "my-formapp-d4c38.firebaseapp.com",
  projectId: "my-formapp-d4c38",
  storageBucket: "my-formapp-d4c38.appspot.com",
  messagingSenderId: "78731249846",
  appId: "1:78731249846:web:41383413197c78a6ed7e17"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export { createUserWithEmailAndPassword as createUser }
export { onAuthStateChanged as onAuth}
export { signInWithEmailAndPassword as signIn}
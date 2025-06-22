import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {

  const signup = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = ()=>{
    return signOut(auth)
  }
  
  const userInfo = {
   signIn,
   signup,
   logOut

  }
  return (
     <AuthContext value={userInfo}>{children}</AuthContext>
  );
};

export default AuthProvider;
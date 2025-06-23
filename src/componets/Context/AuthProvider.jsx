import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading]= useState(true)
  const signup = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }
   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>{
      unSubscribe()
    }
   },[])
   const googleLogin = ()=>{
    return signInWithPopup(auth,provider)
   }
  const userInfo = {
   signIn,
   signup,
   googleLogin,
   logOut,
   user,
   setUser,
   loading

  }
  return (
     <AuthContext value={userInfo}>{children}</AuthContext>
  );
};

export default AuthProvider;
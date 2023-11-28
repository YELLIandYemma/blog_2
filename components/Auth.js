"use client"
import React from 'react'
import {createUserWithEmailAndPassword,signInWithPopup, signOut  } from 'firebase/auth'

const Auth = () => {
    const signInWithGoogle = async () =>{
        try{
     await signInWithPopup(auth, googleProvider)}
     catch(err){
        console.error(err)
     }
    };
  return (
    <div>
        <button className=' w-[10rem] h-10 bg-meal rounded-lg' onClick={signInWithGoogle} >Use google</button>
    </div>
  )
}

export default Auth
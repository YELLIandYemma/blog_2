"use client"
    
import React from 'react'
import NavBar from '@/components/NavBar';
import { db } from '../config/firebase'
import { useState } from 'react';
import {addDoc, collection} from "firebase/firestore";

const page = () => {

  
  
  const contactCollectionRef = collection(db,"contact");


  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [message,setMessage] = useState("");
  const [date,setDate] = useState(new Date());


  const onSubmitMessage = async () =>{
    if (email.length > 0){
    try{
    await addDoc(contactCollectionRef, {
      email: email, 
      name: name, 
      message: message,
      date: date
    });
  alert("message sent")
  }catch(err){
      console.error(err);
    }
  }
  else{
    alert("enter a message");
  }
    }


  return (
    <div >
    <NavBar/>
    <div className='lg:translate-x-[40rem] translate-y-[5rem] md:translate-x-[20rem] translate-x-[2rem]' >
        <input type="email" className=' bg-transparent border-4 border-dark_reach mb-[3rem] text-meal pl-2 rounded-lg'  placeholder='email' onChange={(e) => setEmail(e.target.value)}/><br/>
        <input type="name" className=' bg-transparent border-4 border-dark_reach mb-[3rem] text-meal pl-2 rounded-lg' placeholder='name' onChange={(e) => setName(e.target.value)}/><br/>
        <textarea className=' bg-transparent border-4 border-dark_reach mb-[1rem] text-meal lg:w-[25rem] lg:h-[25rem] w-[20rem] h-[15rem] pl-2 rounded-lg' placeholder='your message .. ' onChange={(e) => setMessage(e.target.value)}></textarea><br/>
        <input type='date' className='bg-transparent border-4 border-dark_reach mb-[1rem] text-meal pl-2 rounded-lg' onChange={Date((e) => setDate(e.target.value))} /><br/>
      <button className=' bg-transparent border-4 border-dark_reach p-2 rounded-lg' id="submit" onClick={onSubmitMessage}>Submit</button>
    </div>
    </div>
    
  )

  }
export default page
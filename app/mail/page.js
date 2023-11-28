"use client"
import React from 'react'
import {db} from "../config/firebase"
import { useEffect, useState } from 'react';
import {collection, getDocs} from "firebase/firestore"

const page = () => {
   const[contactList,setContactList] = useState([]);
   const contactCollectionRef = collection(db,"contact")

   useEffect(()=>{
    const getContactList = async () =>{
        try{
            const data = await getDocs(contactCollectionRef);
            const filteredData = data.docs.map((doc) =>({
                ...doc.data(),
                    id:doc.id,
            }))
            setContactList(filteredData);
        }catch(err){
            console.error(err);
        }
    }


    getContactList()
   },[])

  return (
    <div>
        {
            contactList.map((contact) =>(
                <div>
                    <h1>{contact.name}</h1>
                    <p>{contact.message}</p>
                    <p>{contact.date}</p>
                    <h2>{contact.email}</h2>
                </div>
            ))
        }
    </div>
  )
}

export default page
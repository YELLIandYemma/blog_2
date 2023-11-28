"use client"
import React from 'react'
import {db} from "../config/firebase"
import { useEffect, useState } from 'react';
import {collection, getDocs} from "firebase/firestore"
import NavBar from '@/components/NavBar';

const page = () => {
    const[blogList,setBlogList] = useState([]);
    const blogCollectionRef = collection(db,"blog");
    useEffect(()=>{
        const getBlogList = async () =>{
            try{
                const data = await getDocs(blogCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id:doc.id,
                }));

                setBlogList(filteredData)

            }catch(err){
                console.error(err);
            };
        }

        getBlogList();
    },[])
  return (
    <>
    <NavBar/>
    <div className=' overflow-x-hidden'>
      {blogList.map((blog) =>(
        <div className=' mt-[5rem] ml-[5rem] md:ml-[17rem] lg:ml-[40rem]'>
            <h1 className=' text-3xl font-mono text-reach'>{blog.title}</h1><br/>
            <p className=' font-mono text-lg text-meal mb-10 '>{blog.topic}</p>
         
        </div>

      ))}
    </div>
    </>
  )
}

export default page
"use client"
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import {auth, googleProvider} from "./config/firebase"
import {signInWithPopup} from 'firebase/auth'


export default function Home() {

  const signInWithGoogle = async () =>{
    try{
 await signInWithPopup(auth, googleProvider)}
 catch(err){
    console.error(err)
 }
};

  return (
    <main>  
     <NavBar/>

     <>
     <div className=" translate-y-[18rem] flex align-middle justify-center  font-mono font-bold text-peach md:text-4xl">
      <h1 className='text-2xl font-mono font-bold text-reach md:text-3xl lg:4xl'>Helen Mendoza</h1><br/>
     </div>
     <div className=' translate-y-[20rem] flex align-middle justify-center ml-5 '>
      <h3 className=' font-mono text-meal lg:text-2xl'>
      Meet Helen, a dynamic force in the world of music, where her rhythmic prowess and lyrical finesse<br/> converge in the realm of rap. With an electrifying stage presence and a unique storytelling style,<br/> Helen captivates audiences with her raw and authentic expression, carving her name into the<br/> vibrant tapestry of contemporary hip-hop.
      </h3>
    </div>
    <div className=' translate-y-[28rem]'>
      <h1 className=' text-2xl font-bold font-mono flex aling-middle justify-center text-reach'>Get Updated</h1><br/>
      <div className=' flex align-middle justify-center'>
      <button className=' w-[10rem] h-10 bg-meal rounded-lg' onClick={signInWithGoogle}>Use google</button>
      <auth/>
      </div>
    </div>
     </>
    </main>
  )
}
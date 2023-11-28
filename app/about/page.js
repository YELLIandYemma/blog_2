"use client"
import React from 'react'
import NavBar from '@/components/NavBar'
import AudioPlayer from '@/components/AudioPlayer'

const page = () => {

  return (
    <>
      <NavBar/>
      <div className=' flex align-middle justify-center translate-y-[7rem]'>
      <h1 className=' text-reach text-2xl font-mono font-bold md:text-3xl lg:4xl '>About me</h1>
      </div>
      <div className=' translate-y-[10rem] flex align-middle justify-center ml-3 md '>
        <p className=' text-sm text-meal font-mono md:text-lg lg:text-xl'>
        In the concrete jungle where dreams are born, I emerged, Helen, weaving my narrative through the <br/>
        beats and rhymes of life. Raised in the pulse of the city, each street corner became a stage for my stories. Struggles were my <br/>
        verses, triumphs my chorus, as I navigated the maze of existence with <br/>
        a mic in hand. From basement cyphers to city lights, I sculpted my identity in the crucible of hip-<br/>
        hop, an artist reborn with each lyric. The rhythm of adversity fueled my passion, transforming me<br/>
         into a lyrical alchemist. Behind the mic, I found solace, turning pain into poetry and challenges into <br/>
         anthems. My journey is a fusion of beats and echoes, an ode to the streets that shaped me. With <br/>
         every rhyme, I aim to bridge the gap between realities, creating a symphony where the unheard <br/>
         find their voice. In this urban symphony, I am Helen, and my verses resonate with the pulse of life.<br/>
        </p>
      </div>
      <div><br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <div className='  mt-[9rem]'>
          <h1 className=' text-reach font-bold font-mono text-2xl md:text-3xl lg:text-4xl flex align-middle justify-center'>Songs </h1>
          <h6 className=' mt-[1rem] flex align-middle justify-center font-mono font-semibold text-reach'>Listen to my songs</h6>
        </div>
        <div>
       <AudioPlayer/>
        </div>
      </div>
    </>
  )
}

export default page
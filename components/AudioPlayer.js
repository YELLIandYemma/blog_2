// components/AudioPlayer.js
import React from 'react';

const AudioPlayer = () => {
  return (
    <div className=' flex align-middle justify-center translate-y-[5rem]'>
      <audio 
      controls
      className=' flex align-middle justify-center translate-x-[8.5rem] '
      style={{ backgroundColor: 'white', borderRadius: '8px' }}
      >
        <source src="/audio/song1.mp3" type="audio/mp3" />
        
      </audio><br/>
      <audio 
      controls
      className=' flex align-middle justify-center translate-y-[5rem] translate-x-[-10rem]'  
      style={{ backgroundColor: 'white', borderRadius: '8px' }}
      >
        <source src="/audio/song2.mp3" type="audio/mp3" />
        
      </audio>
    </div>
  );
};
export default AudioPlayer
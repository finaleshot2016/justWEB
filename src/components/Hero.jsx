import React from 'react';

import heroVid from '../assets/dogestylevid1.mp4';

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div id="about" className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
<br /><br />
        <p className='text-xl mt-52 py-10 text-white'>
        The DOGE STYLE is a DOGECHAIN token that will bring our community both $$$ and memes. Our goal is to establish ourselves as a top-tier meme coin that will break the blockchain's meta. 
<br />Additionally, this will mark the launch of the utilities for various memes and projects on Doge Chain.<br /> This would be the ideal position for you to have.
        </p>
        <div>
          <button className='m-2 bg-white hover:bg-pink-700 text-black font-bold py-2 px-4 rounded'><a href="/">Buy</a></button>
          <button className='m-2 bg-white hover:bg-pink-700 text-black font-bold py-2 px-4 rounded'><a href="/">Chart</a></button>
        </div>
      </div>
      <div>
        <p className='text-center text-white text-2xl font-bold'></p>
      </div>
    </div>
  );
};

export default Hero;

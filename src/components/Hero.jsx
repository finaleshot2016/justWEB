import React from 'react';

import heroVid from '../assets/lucy.mp4';

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
        <br></br>
        <p className='text-2xl mt-52 py-10 text-black'><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        Stop evolution, return to monkey. Dont think, Just Ape
        </p>
        <div>
          <button className='m-2 bg-white hover:bg-pink-700 text-black font-bold py-2 px-4 rounded'>Buy</button>
          <button className='m-2 bg-white hover:bg-pink-700 text-black font-bold py-2 px-4 rounded'>Chart</button>
        </div>
      </div>
      <div>
        <p className='text-center text-white text-2xl font-bold'></p>
      </div>
    </div>
  );
};

export default Hero;

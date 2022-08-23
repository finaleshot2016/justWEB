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

<br /><br />

        </p>
        <div>
          <button className='m-2 bg-white hover:bg-pink-700 text-black font-bold py-2 px-4 rounded'><a href="/">Buy</a></button>
          <button className='m-2 bg-white hover:bg-pink-700 text-black font-bold py-2 px-4 rounded'><a href="/">Chart</a></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

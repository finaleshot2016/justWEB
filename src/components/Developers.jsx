import React from 'react';
import terminal from '../assets/dogestyle2.png'

const Developers = () => {
  return (
    <div id="tokenomics" className='w-full text-white bg-[#cb0561]'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 md:flex'>
        <div>
          <h1>Decentralized Platform</h1>
          <p>
           The DOGE STYLE is a DOGECHAIN token that will bring our community both $$$ and memes. Our goal is to establish ourselves as a top-tier meme coin that will break the blockchain's meta. Additionally, this will mark the launch of the utilities for various memes and projects on Doge Chain.
          </p><br />
          <p>Buy:
            <ul>
  <li>5% - Marketing</li>
  <li>2% - Dev</li>
  <li>1% - LP</li>
            Sell:
            <ul>
  <li>5% - Marketing</li>
  <li>2% - Dev</li>
  <li>1% - LP</li>
  </ul></p>

        </div>
        <div className='flex justify-center w-full py-2'>
            <img className='max-w-[450px]' src={terminal} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Developers;

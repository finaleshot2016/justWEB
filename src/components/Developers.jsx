import React from 'react';
import terminal from '../assets/jirussicpark.png'

const Developers = () => {
  return (
    <div id="tokenomics" className='w-full text-black bg-[#FFCBC4]'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 md:flex'>
        <div>
          <h1>Decentralized Platform</h1>
          <p>
           $JP or Jirussic Park is fully decentralized and owned by its fun and amazing community on Binance Smart Chain with rewards in BUSD for holding $JP.
          </p><br />
          <p>Buy:
            <ul>
  <li>2% - Marketing</li><li>1% - Reflection</li><li>3% - LP</li></ul>
            Sell:
            <ul>
  <li>9% - Marketing</li>
  <li>3% - Reflection</li>
  <li>3% - LP</li>
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

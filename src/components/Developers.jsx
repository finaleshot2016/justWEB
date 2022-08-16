import React from 'react';
import terminal from '../assets/dogestyle2.png'

const Developers = () => {
  return (
    <div id="tokenomics" className='w-full text-white bg-[#cb0561]'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 md:flex'>
        <div>
          <h1>Decentralized Platform</h1>
          <p>
           $DSTYLE or DOGE STYLE is fully decentralized and owned by its fun and amazing community on DOGE CHAIN.
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

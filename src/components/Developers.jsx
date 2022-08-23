import React from 'react';
import terminal from '../assets/jape.png'

const Developers = () => {
  return (
    <div id="tokenomics" className='w-full text-white bg-[#000000]'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 md:flex'>
        <div>
          <h1>JUST APE</h1>
          <p className='text-md'><br /><br /><br /><br /><br />
A dev with a goal to open the eyes of everyone that evolution fucked every inch of humanity. <br /><br />
A dev with no greed that is willing to give more to the community and not just larp. <br /><br />
A dev with a vision to give every investors an opportunity to turn their life around. <br /><br />
A dev that does not think just ape, to show that a project is so good, investors dont need to DYOR.<br /><br />
          </p><br />


        </div>
        <div className='flex justify-center w-full py-2'>
            <img className='max-w-[450px]' src={terminal} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Developers;

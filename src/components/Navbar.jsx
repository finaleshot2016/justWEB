import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full h-[90px] bg-[#FFCBC4]'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
          <h1 className='text-black'><a href="/">JIRUSSIC PARK</a></h1>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-black items-center'>
            <li><a href="#about">About</a></li>
            <li><a href="#roadmap">Road Map</a></li>
            <li><a href="#tokenomics">Tokenomics</a></li>
            <li><a href="">Telegram</a></li>
            <li><a href="https://twitter.com/JirussicParkBSC">Twitter</a></li>
            <button className='m-2 bg-white hover:bg-pink-700 text-black font-bold py-2 px-4 rounded'>Buy on Pancakeswap</button>
          </ul>
         </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
          
          
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 
    'absolute left-[-100%]'}>
          <ul>
            <li className='text-2xl'>Road Map</li>
            <li className='text-2xl'>Twitter</li>
            <li className='text-2xl'>Telegram</li>
            <li className='text-2xl'>About</li>
            <button className='m-8'>Buy</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

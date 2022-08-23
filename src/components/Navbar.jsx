import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import terminal from '../assets/JAPE2.png'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (

    <div className='w-full h-[90px] bg-[#000000]'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div className='items-left'>
        <a href="/"><img className='max-w-[450px]' src={terminal} alt="/" /></a>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-white items-center'>
            <li><a href="#about">About</a></li>
            <li><a href="#roadmap">Road Map</a></li>
            <li><a href="https://medium.com/@AncientMonke" target="_blank" rel="noopener noreferrer">Medium</a></li>
            <li><a href="/">Telegram</a></li>
            <li><a href="https://twitter.com/JustApeEth" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <button className='m-2 bg-white hover:bg-pink-700 text-black font-bold py-2 px-4 rounded'><a href="https://app.uniswap.org/#/swap?outputCurrency=0xe1955423dceeb48d1d446ed5cbf732b04b90c6f2&chain=mainnet" target="_blank" rel="noopener noreferrer">Buy on Uniswap</a></button>
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

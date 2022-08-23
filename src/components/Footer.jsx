import React from 'react'
import terminal from '../assets/twitter.png'
import terminal1 from '../assets/telegram.png'
import terminal2 from '../assets/medium.png'

const Footer = () => {
  return (
    <div className='bg-black text-white justify-center items-center py-20'>
        <div className='flex justify-center grid-rows-1 w-full py-2'>
            <div>

            <a href="https://twitter.com/JustApeEth" target="_blank" rel="noopener noreferrer"><img className='max-w-[100px]' src={terminal} alt="https://twitter.com/" /></a>

            <a href="https://t.me/JustApeERC" target="_blank" rel="noopener noreferrer"><img className='max-w-[100px]' src={terminal1} alt="/" /></a>

            <a href="https://medium.com/@AncientMonke" target="_blank" rel="noopener noreferrer"><img className='max-w-[100px]' src={terminal2} alt="/" /></a>
            </div>
        </div> 
 <p className='text-xl text-center mt-5 py-10 text-white'>
Copyright © 2022 JUST APE
        </p>

        </div>
  )
}

export default Footer

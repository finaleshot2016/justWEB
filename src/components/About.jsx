import React from 'react';
import AboutCard from './AboutCard';

const About = () => {
  return (
    <div className='w-full bg-white text-black text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div id="roadmap">
          <h1 className='py-4'>Just Ape Roadmap</h1>

          {/* Card Container */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

            {/* Card */}
            <AboutCard heading='Phase 1' text='Contract Deployment, Dogeswap Listing, Marketing Campaign & 200 Holders' />
            <AboutCard heading='Phase 2' text='Website Live, More Marketing Campaign, CMC and CG Listing & 500 Holders.' />
            <AboutCard heading='Phase 3' text='Website Upgrade, CEX Listing, Dashboard, Whitepaper, More Marketing Campaign & 1,000 Holders.' />
            <AboutCard heading='Phase 4' text='Usecase Reveal & 5,000 Holders.' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

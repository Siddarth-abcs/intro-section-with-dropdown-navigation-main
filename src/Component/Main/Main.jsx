import React from 'react'

import mobilehero from '../../../images/image-hero-mobile.png'
import desktophero from '../../../images/image-hero-desktop.png'

import databiz from '../../../images/client-databiz.svg'
import audiophile from '../../../images/client-audiophile.svg'
import maker from '../../../images/client-maker.svg'
import meet from '../../../images/client-meet.svg'

export const Main = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center md:w-5/6 m-auto'>
      {/* text part */}
      <div className='text-center md:w-3/6 md:text-left'>
        <h1 className='font-bold text-4xl my-8 md:text-8xl'>Make <br className='hidden md:block' /> remote work</h1>
        <p className='font-semibold text-[1.25rem] text-mediumGray m-auto'>Get your team in sync, no matter your location. <br className='hidden md:block' />
           Streamline processes, create team rituals, and <br className='hidden md:block' />
           watch productivity soar.</p>
        <button 
        className='px-8 py-4 my-8 bg-almostBlack text-almostWhite border-[1px] border-almostBlack
        rounded-2xl text-2xl font-bold tracking-[1px] hover:text-almostBlack hover:bg-almostWhite '>Learn more</button>
        <ul className='m-auto mb-4 grid grid-cols-4'>
          <li className='mx-[8px]'><img className='w-36' src={databiz} alt="" /></li>
          <li className='mx-[8px]'><img className='w-36' src={audiophile} alt="" /></li>
          <li className='mx-[8px]'><img className='w-36' src={maker} alt="" /></li>
          <li className='mx-[8px]'><img className='w-36' src={meet} alt="" /></li>
        </ul>
      </div>
      {/* image part */}
      <div className='mt-6 md:w-3/6 md:hidden'>
        <img src={mobilehero} alt="" />
      </div>
      <div className='mt-6 md:w-3/6 hidden md:block'>
        <img src={desktophero} alt="" className='h-[80vh] ml-auto' />
      </div>
    </div>
  )
}

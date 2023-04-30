import React from 'react'

import Img1 from '../assets/img/exp-img1.png'
import Img2 from '../assets/img/exp-img2.png'

const Experience = () => {
  return (
    <section className='mb-12 lg:mb-24'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row min-h-[480px] lg:space-x-20'>
          {/* IMAGES */}
          <div className='flex flex-1 items-center space-x-6 lg:space-x-12'>
            <div
              className='self-start'
              data-aos='fade-down'
              data-aos-offset='400'
            >
              <img src={Img1} />
            </div>
            <div
              className='self-end'
              data-aos='fade-up'
            >
              <img src={Img2} />
            </div>
          </div>
          {/* TEXT */}
          <div
            className='flex flex-1 flex-col justify-center items-start mt-6 lg:mt-0'
            data-aos='fade-left'
            data-aos-offset='400'
          >
            <h2 className='font-bold mb-6 text-3xl'>New Experience In Playing Games</h2>
            <p className='font-secondary mb-6'>You can try playing the game with a new style and of course a more real feel, like you are the main character in your game and adventure in this new digital world.</p>
            <button className='btn'>Get it now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

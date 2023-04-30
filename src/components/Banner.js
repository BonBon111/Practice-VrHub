import React from 'react'

import Users from '../components/Users'

import Img from '../assets/img/banner-img.png'

const Banner = () => {
  return (
    <section className='min-h-[600px] pt-24 pb-12 lg:pb-0 text-center lg:text-left relative'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* TEXT */}
          <div>
            {/* TITLE */}
            <h1
              className='text-3xl lg:text-5xl font-bold mb-8 lg:leading-snug'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              Let's Explore <br /> Three-Dimensional Visually.
            </h1>
            {/* SUBTITLE */}
            <p
              className='font-secondary mb-12 mx-auto max-w-[600px] lg:mx-0'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              An Immersive Journey Into the Future of Technology, Redefining the Way We Interact with the World.
            </p>
            {/* BUTTONS */}
            <div
              className='flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start'
              data-aos='fade-down'
              data-aos-delay='700'
            >
              <button className='btn'>Get it now</button>
              <a className='border-b-2 border-transparent hover:border-white transition ease-out' href="#">
                Explore Device
              </a>
            </div>
            {/* USERS */}
            <Users />
          </div>
          {/* IMAGE */}
          <div
            data-aos='fade-down'
            data-aos-delay='800'
            className='lg:min-h-[750px]'
          >
            <img
              className='lg:h-[700px] lg:w-[750px]'
              src={Img} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

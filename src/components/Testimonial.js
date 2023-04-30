import React from 'react'

import TestimonialSlider from './TestimonialSlider'

const Testimonial = () => {
  return (
    <section className='mb-64 lg:mb-48'>
      <div className="container mx-auto">
        <div className='bg-purple-400/10 max-h-[400px] p-12 rounded-lg'>
          {/* TEXT */}
          <div className='text-center'>
            <h2
              className='text-3xl font-bold mb-6'
              data-aos='fade-up'
              data-aos-offset='300'
              data-aos-delay='1600'
            >
              What our clients say
            </h2>
            <p
              className='mb-12 lg:mb-24 mx-auto max-w-2xl'
              data-aos='fade-up'
              data-aos-offset='300'
              data-aos-delay='1800'
            >
              See what our customer say about us. It really matters for us. How good or bad we will make it for evaluation to make EhyalLive better.
            </p>
          </div>
          {/* SLIDER */}
          <div
            data-aos='fade-up' data-aos-offset='300' data-aos-delay='2000'
          >
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial

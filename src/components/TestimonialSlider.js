import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { slider } from '../data'

const TestimonialSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {slider.map((slide, index) => {
        const { message, image, name, email } = slide
        return (
          <SwiperSlide
            className='bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35] p-4 rounded-lg lg:p-6 min-h-[240px]'
            key={index}
          >
            {/* TESTIMONIAL */}
            <p className='mb-8 min-h-[100px] text-[15px]'>{message}</p>
            {/* CLIENTS */}
            <div className='flex flex-col space-x-2 md:flex-row md:items-center'>
              {/* AVATAR */}
              <div>
                <img className='mb-3 md:mb-0 w-12' src={image} />
              </div>
              {/* INFO */}
              <div className='max-w-[150px]'>
                <div className='font-medium text-base'>{name}</div>
                <div className='font-medium text-rose-600 text-[15px]'>{email}</div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper >
  )
}

export default TestimonialSlider

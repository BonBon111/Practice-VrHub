import React, { useState } from 'react'

import ModalVideo from 'react-modal-video'
import '../modalVideo.scss'

import { BsPlayCircleFill } from 'react-icons/bs'

const Video = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='py-6 bg-[#534686]/30'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between'>
          {/* TITLE */}
          <h3
            data-aos='fade-right'
            data-aos-offset='350'
            className='text-2xl font-semibold mb-8 lg:mb-0'
          >
            Awesome experiences with virtual reality world
          </h3>
          {/* MODAL VIDEO */}
          <ModalVideo
            channel='youtube'
            videoId='NOk_M1Ib5F0'
            autoplay
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />
          {/* VIDEO */}
          <div
            className='bg-videoBg bg-no-repeat bg-cover flex w-[270px] h-[180px] items-center justify-center'
            data-aos='fade-left'
            data-aos-offset='350'
          >
            <BsPlayCircleFill
              className='text-4xl text-white/80 hover:text-white hover:scale-110 transition cursor-pointer'
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video

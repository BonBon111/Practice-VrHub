import React from 'react'

import Headset1 from '../assets/img/headset-1.png'
import Headset2 from '../assets/img/headset-2.png'
import Headset3 from '../assets/img/headset-3.png'
import Headset4 from '../assets/img/headset-4.png'

const Headsets = () => {
  return (
    <section className='py-12 lg:py-24'>
      <div className="container mx-auto">
        {/* TITLE */}
        <h2
          data-aos='fade-down'
          data-aos-offset='300'
          className='text-3xl font-bold mb-6'
        >
          Mixed Reality Headsets
        </h2>
        {/* GRID */}
        <div className='grid gap-y-4 lg:grid-cols-2 lg:gap-9'>
          {/* ITEM1 */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1000'
          >
            {/* IMAGE */}
            <img src={Headset1} />
            {/* TEXT */}
            <div className='absolute bottom-0 bg-white/20 max-w-[300px] min-h-[150px] p-6 backdrop-blur-md'>
              <h4 className='text-xl mb-2 font-semibold'>Metaverse</h4>
              <p>A Network of 3D virtual worlds focused on social connection.</p>
            </div>
          </div>
          {/* ITEM2 */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1300'
          >
            {/* IMAGE */}
            <img src={Headset2} />
            {/* TEXT */}
            <div className='absolute bottom-0 bg-white/20 max-w-[300px] min-h-[150px] p-6 backdrop-blur-md'>
              <h4 className='text-xl mb-2 font-semibold'>AIoT</h4>
              <p>AI and IoT are both emerging innovative technologies with a lot of potentials.</p>
            </div>
          </div>
          {/* ITEM3 */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1600'
          >
            {/* IMAGE */}
            <img src={Headset3} />
            {/* TEXT */}
            <div className='absolute bottom-0 bg-white/20 max-w-[300px] min-h-[150px] p-6 backdrop-blur-md'>
              <h4 className='text-xl mb-2 font-semibold'>HoloLens</h4>
              <p>HoloLens display information, blend with the real world, or even simulate a virtual world.</p>
            </div>
          </div>
          {/* ITEM4 */}
          <div
            className='relative'
            data-aos='zoom-in'
            data-aos-offset='300'
            data-aos-delay='1900'
          >
            {/* IMAGE */}
            <img src={Headset4} />
            {/* TEXT */}
            <div className='absolute bottom-0 bg-white/20 max-w-[300px] min-h-[150px] p-6 backdrop-blur-md'>
              <h4 className='text-xl mb-2 font-semibold'>TPCASTT</h4>
              <p>Method is great to start students reading and inferring with little assistance from the instructor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Headsets
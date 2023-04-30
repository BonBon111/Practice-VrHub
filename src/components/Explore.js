import React from 'react'

const Explore = () => {
  return (
    <section className='min-h-[400px] mb-16 lg:mb-4'>
      <div className="container mx-auto h-full">
        <div className='bg-explore bg-no-repeat bg-cover p-14 flex flex-col h-full justify-center items-start'>
          <h3
            data-aos='fade-right'
            data-aos-offset='1000'
            className='text-3xl font-semibold mb-8'
          >
            Explore product in new way
          </h3>
          <p
            data-aos='fade-right'
            className='max-w-xs mb-12'
          >
            We specialize in creating visual identities for products and brands in your company
          </p>
          <form
            data-aos='fade-up'
            data-aos-offset='200'
            className='flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0'
          >
            <input
              type='text'
              placeholder='Your email'
              className='bg-gradient-to-t from-[#341D38] to-[#271223] h-12 px-4 outline-none rounded-md'
            />
            <button className='btn'>Start</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Explore

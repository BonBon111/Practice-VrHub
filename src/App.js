import React, { useEffect, useState } from 'react'

import Banner from './components/Banner'
import Header from './components/Header'
import NavMobile from './components/NavMobile'
import Experience from './components/Experience'
import Video from './components/Video'
import Headsets from './components/Headsets'
import Testimonial from './components/Testimonial'
import Explore from './components/Explore'

import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  const [navMobile, setNavMobile] = useState(false)

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    })
  })

  return (
    <div className='relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:absolute before:bg-no-repeat before:-top-16 before:left-[600px] before:hidden before:lg:flex'>
      <Header setNavMobile={setNavMobile} />
      <Banner />
      {/* MOBILE NAV */}
      <div className={`${navMobile ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-48 transtion-all`}>
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <Explore />
    </div>
  )
}

export default App

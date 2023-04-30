import React from 'react'

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex items-center font-secondary space-x-12'>
        <li className='nav-link'><a href="#">Home</a></li>
        <li className='nav-link'><a href="#">Company</a></li>
        <li className='nav-link'><a href="#">Features</a></li>
        <li className='btn'><a href="#">Sign up</a></li>
      </ul>
    </nav>
  )
}

export default Nav

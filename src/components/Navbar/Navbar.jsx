import React from 'react'
import LogoIcon from '../../assets/shared/logo.svg'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {


  return (
    <nav className='navbar'>
      <div className='logo_icon'>
        <img src={LogoIcon} alt='logo icon' />
      </div>

      <HamburgerMenu />
    </nav>
  )
}

export default Navbar
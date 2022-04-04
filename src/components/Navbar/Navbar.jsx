import React from 'react'
import LOGO from '../../assets/shared/logo.svg'
import HamburgerMenu from '../../assets/shared/icon-hamburger.svg'
import CloseIcon from '../../assets/shared/icon-close.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className='logo_icon'>
      <img src={LOGO} alt='logo icon' />
    </div>

      <div className='menu'>
        <img src={HamburgerMenu} alt='hamburger menu' />

        <div className='menu_open'>
          <img src={CloseIcon} alt='close icon' />
            <ul>
              <li>00 <span>HOME</span></li>
              <li>01 <span>DESTINATION</span></li>
              <li>02 <span>CREW</span></li>
              <li>03 <span>TECHNOLOGY</span></li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
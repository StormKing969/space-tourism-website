import React from 'react'
import LogoIcon from '../../assets/shared/logo.svg'
import HamburgerMenu from '../../assets/shared/icon-hamburger.svg'
import CloseIcon from '../../assets/shared/icon-close.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className='logo_icon'>
      <img src={LogoIcon} alt='logo icon' />
    </div>

      <div className='menu'>
        <img src={HamburgerMenu} alt='hamburger menu' />

        <div className='menu_open'>
          <img src={CloseIcon} alt='close icon' />
            <ul>
              <li><a href='/'><span aria-hidden>00</span>HOME</a></li>
              <li><a href='/destination'><span aria-hidden>01</span>DESTINATION</a></li>
              <li><a href='/crew'><span aria-hidden>02</span>CREW</a></li>
              <li><a href='/technology'><span aria-hidden>03</span>TECHNOLOGY</a></li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
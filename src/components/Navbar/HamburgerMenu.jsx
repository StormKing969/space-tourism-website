import React, { useState } from 'react'
import HamburgerMenuIcon from '../../assets/shared/icon-hamburger.svg'
import CloseIcon from '../../assets/shared/icon-close.svg'

const HamburgerMenu = () => {
    const [showMenu, setMenuState] = useState(true)

    function handleClick() {
        setMenuState(showMenu ? false : true)
    }

    return (
        <div className='menu'>
            <div className='menu_close' style={{display: showMenu ? "block" : "none"}}>
                <img src={ HamburgerMenuIcon } alt='hamburger menu icon' onClick={ handleClick } />
            </div>

            <div className='menu_open' style={{transform: showMenu ? "translateX(100%)" : "translateX(0)"}}>
                <img src={ CloseIcon } alt='close icon' onClick={handleClick} />

                <ul>
                    <li><a href='/'><span aria-hidden>00</span>HOME</a></li>
                    <li><a href='/destination'><span aria-hidden>01</span>DESTINATION</a></li>
                    <li><a href='/crew'><span aria-hidden>02</span>CREW</a></li>
                    <li><a href='/technology'><span aria-hidden>03</span>TECHNOLOGY</a></li>
                </ul>
            </div>
        </div>
    )
}

export default HamburgerMenu
import React, { useState } from 'react'
import HamburgerMenuIcon from '../../assets/shared/icon-hamburger.svg'
import CloseIcon from '../../assets/shared/icon-close.svg'
import { NavLink } from 'react-router-dom'

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
                    <li>
                        <NavLink end to='/' onClick={handleClick} className={(navData) => navData.isActive ? "main_link actived" : "main_link"}>
                        <span aria-hidden>00</span>
                        HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink end to='/destination/moon' onClick={handleClick} className={(navData) => navData.isActive ? "main_link actived" : "main_link"}>
                        <span aria-hidden>01</span>
                        DESTINATION
                        </NavLink>
                    </li>
                    <li>
                        <NavLink end to='/crew' onClick={handleClick} className={(navData) => navData.isActive ? "main_link actived" : "main_link"}>
                        <span aria-hidden>02</span>
                        CREW
                        </NavLink>
                    </li>
                    <li>
                        <NavLink end to='/technology' onClick={handleClick} className={(navData) => navData.isActive ? "main_link actived" : "main_link"}>
                        <span aria-hidden>03</span>
                        TECHNOLOGY
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HamburgerMenu
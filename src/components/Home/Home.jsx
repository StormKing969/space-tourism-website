import React, { useState } from 'react'
import BgImgMobile from '../../assets/home/background-home-mobile.jpg'
import BgImgTablet from '../../assets/home/background-home-tablet.jpg'
import BgImgDesktop from '../../assets/home/background-home-desktop.jpg'

// const [displayImg, setDisplayImg] = useState[{BgImgMobile}]

// function windowDimensions() {
//   console.log(document.querySelector(window).innerWidth());
// }

// console.log(displayImg);
// windowDimensions()

const Home = () => {
  return (
    <main>
      <div className='bg_img'>
        <img src={BgImgMobile} alt='background' />
      </div>
    </main>
  )
}

export default Home
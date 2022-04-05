import React from 'react'
import imgBg from './useResizedImages'

const Home = () => {
  const BgImg = imgBg().current;
  
  return (
    <main className='home_container'>
      <div className='bg_img'>
        <img src={ BgImg } alt='background' />
      </div>
    </main>
  )
}

export default Home
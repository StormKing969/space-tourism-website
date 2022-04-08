import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <main className='home'>
      <div className='bg_img'>
      </div>

      <div className='home_container'>
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <p className='home_title'>SPACE</p>

        <div className='home_content'>
          <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
        </div>
      </div>

      
      <NavLink end to='/destination/moon'>
        <div className='home_button'>
        <span className='explore_btn'>EXPLORE</span>
        </div>
      </NavLink>
    </main>
  )
}

export default Home
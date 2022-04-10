import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Crew from './components/Crew/Crew'
import Destination from './components/Destination/Destination'
import Technology from './components/Technology/Technology'
import ErrorPage from './components/ErrorPage/Error'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <Router>
      <div className='main_container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/destination/:planetName' element={<Destination />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
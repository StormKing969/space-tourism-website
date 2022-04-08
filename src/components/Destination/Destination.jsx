import React, { useState } from 'react'
import DestinationCard from './DestinationCard'
import DestinationData from '../../assets/destination/DestinationData'
import { NavLink, useParams } from 'react-router-dom'

const Destination = () => {
  const moon = DestinationData[0]
  const mars = DestinationData[1]
  const europa = DestinationData[2]
  const titan = DestinationData[3]

  const [destinationName, setDestinationName] = useState(moon)
  const locationImg = destinationName.images.png
  const locationName = destinationName.name

  const UserSelection = (e) => {  
    if(e.target.innerHTML === "MOON") {
      setDestinationName(moon);
    } else if(e.target.innerHTML === "MARS") {
      setDestinationName(mars);
    } else if(e.target.innerHTML === "EUROPA") {
      setDestinationName(europa);
    } else {
      setDestinationName(titan);
    }
  }

  return (
    <div className='destination'>
      <div className='destination_bg_img'>
      </div>

      <div className='destination_container'>
        <h5><span>01</span> PICK YOUR DESTINATION</h5>
        
        <div className='destination_img'>
          <img src={ locationImg } alt={ locationName }></img>
        </div>

        <div className='destination_location'>
          <ul className='destination_name'>
            <li><NavLink end to='/destination/moon' className={(navData) => navData.isActive ? "destination_selected" : "destination_unselected"} onClick={ UserSelection }>MOON</NavLink></li>
            <li><NavLink end to='/destination/mars' className={(navData) => navData.isActive ? "destination_selected" : "destination_unselected"} onClick={ UserSelection }>MARS</NavLink></li>
            <li><NavLink end to='/destination/europa' className={(navData) => navData.isActive ? "destination_selected" : "destination_unselected"} onClick={ UserSelection }>EUROPA</NavLink></li>
            <li><NavLink end to='/destination/titan' className={(navData) => navData.isActive ? "destination_selected" : "destination_unselected"} onClick={ UserSelection }>TITAN</NavLink></li>
          </ul>
        </div>

        <div className='destination_description'>
            <DestinationCard 
              key={destinationName.id}
              name={destinationName.name}
              description={destinationName.description}
              distance={destinationName.distance}
              travel={destinationName.travel}
            />
        </div>
      </div>
    </div>
  )
}

export default Destination
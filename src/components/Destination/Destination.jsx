import React, { useState } from 'react'
import DestinationCard from './DestinationCard'
import DestinationData from '../../assets/destination/DestinationData'

const Destination = () => {
  const moon = DestinationData[0]
  const mars = DestinationData[1]
  const europa = DestinationData[2]
  const titan = DestinationData[3]

  const [destinationName, setDestinationName] = useState(moon)

  const [isActive, setActive] = useState(false);

  const UserSelection = (e) => {
    setActive(isActive ? false : true);

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

  const locationImg = destinationName.images.png
  const locationName = destinationName.name

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
            <li><span className={ isActive ? 'destination_selected': 'destination_unselected' } onClick={ UserSelection }>MOON</span></li>
            <li><span className={ isActive ? 'destination_selected': 'destination_unselected' } onClick={ UserSelection }>MARS</span></li>
            <li><span className={ isActive ? 'destination_selected': 'destination_unselected' } onClick={ UserSelection }>EUROPA</span></li>
            <li><span className={ isActive ? 'destination_selected': 'destination_unselected' } onClick={ UserSelection }>TITAN</span></li>
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
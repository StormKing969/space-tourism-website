import React from 'react'
import DestinationCard from './DestinationCard'
import DestinationData from '../../assets/destination/DestinationData'

const Destination = () => {
  return (
    <div className='destination'>
      <div className='destination_bg_img'>
      </div>

      <div className='destination_container'>
        <h5><span>01</span> PICK YOUR DESTINATION</h5>

        { DestinationData.map(data => (
          <DestinationCard 
            key={data.id}
            name={data.name}
            images={data.images.png}
            description={data.description}
            distance={data.distance}
            travel={data.travel}
          />
        ))}
      </div>
    </div>
  )
}

export default Destination
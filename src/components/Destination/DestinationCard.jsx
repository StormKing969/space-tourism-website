function DestinationCard(props) {
  return (
    <div className="destinationCard_content">
        <h1>{ props.name }</h1>

        <div className="destinationCard_description">
            <p>{ props.description }</p>
        </div>

        <span className="destinationCard_horizontal_line"></span>

        <div className="destinationCard_facts">
          <div className="destination_fact_container">
            <span className="fact_title">AVG. DISTANCE</span>
            <p>{ props.distance }</p>
          </div>
          <br />
          <div className="destination_fact_container">
            <span className="fact_title">EST. TRAVEL TIME</span>
            <p>{ props.travel }</p>
          </div>
        </div>
    </div>
  )
}

export default DestinationCard
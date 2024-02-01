const GameCard = (props) => {
  
  return (
    <div className="card game-card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt="#"/>
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <h3>{props.rating}</h3>
      </div>
    </div>
  )
}

export default GameCard

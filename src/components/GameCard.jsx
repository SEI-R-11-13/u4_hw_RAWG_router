const GameCard = ({result}) => {
  
  return (
    <div className="card game-card" onClick={result.onClick}>
      <div className="img-wrapper">
        <img src={result.background_image} alt="image" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{result.name}</h3>
        <p>{result.rating}</p>
      </div>
    </div>
  )
}

export default GameCard

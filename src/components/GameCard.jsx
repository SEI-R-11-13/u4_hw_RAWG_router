const GameCard = ({ onClick, image, name, rating }) => {
  return (
    <div className="card game-card" onClick={onClick}>
      <div className="img-wrapper">
        <img src={image} alt={name} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{name}</h3>
        <p>{rating}</p>
      </div>
    </div>
  )
}

export default GameCard

const GenreCard = ({ image, name, gamesCount, onClick }) => {

  return (
    <div className="card" onClick={onClick}>
      <div className="img-wrapper">
        <img src={image} alt={`${name} genre`} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{name}</h3>
        <p>{gamesCount} games</p>
      </div>
    </div>
  )
}

export default GenreCard

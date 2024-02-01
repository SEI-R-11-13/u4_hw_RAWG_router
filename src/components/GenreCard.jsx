const GenreCard = ({genre}) => {
  return (
    <div className="card" onClick={genre.onclick}>
      <div className="img-wrapper">
        <img src={genre.image_background} alt={genre.name} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{genre.name}</h3>
        <p>{genre.gamesCount}</p>
      </div>
    </div>
  )
}

export default GenreCard

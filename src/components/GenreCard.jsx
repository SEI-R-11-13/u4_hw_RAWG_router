const GenreCard = ({genre}) => {

  return (
    <div className="card" onClick={genre.onClick}>
      <div className="img-wrapper">
        <img src={genre.image_background} alt={genre.name} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{genre.name}</h3>
        <p>{genre.gameCount}</p>
      </div>
    </div>
  )
}

export default GenreCard
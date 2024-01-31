const GenreCard = () => {

  return (
    <div className="card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <p>{props.gameCount}</p>
      </div>
    </div>
  )
}

export default GenreCard


  
 const GameCard = (props) => {
    return (
      <div className="card game-card" onClick={props.onClick}>
        <div className="img-wrapper">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="info-wrapper">
          <h3>{props.name}</h3>
          <p>Rating: {props.rating}</p>
        </div>
      </div>
    );
  };

export default GameCard

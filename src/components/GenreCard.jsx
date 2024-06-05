import React from 'react';

const GenreCard = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt="Genre Cover" />
      </div>
      <div className="info-wrapper">
        <h3>{props.name}</h3>
        <p>{props.gamesCount} Games</p>
        
        <ul>
          {props.games.map((game) => (
            <li key={game.id}>{game.name}</li>
            
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GenreCard;

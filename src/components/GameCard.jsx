import React from 'react';

const GameCard = ({ name, rating, image }) => {
  return (
    <div className="card game-card">
      <div className="img-wrapper">
        <img src={image} alt={name} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{name}</h3>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default GameCard;

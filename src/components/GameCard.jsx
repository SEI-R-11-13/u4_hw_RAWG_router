import React from 'react';


const GameCard = ({ onClick, name, rating, background_image }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={background_image} alt={name} />
      <h3>{name}</h3>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default GameCard

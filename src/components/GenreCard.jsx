import React from 'react';



const GenreCard = ({ onClick, name, gamesCount }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{name}</h3>
      <p>Games Count: {gamesCount}</p>
    </div>
  );
};

export default GenreCard

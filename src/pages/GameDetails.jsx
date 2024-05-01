import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const GameDetails = () => {
  const { gameId } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games?search=${searchQuery}&key=${import.meta.env.VITE_RAWG_KEY}`);
        setGameDetails(response.data);
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    };
    fetchGameDetails();
  }, [gameId]);

  return (
    <div className="game-details">
      {gameDetails ? (
        <div>
          <h2>{gameDetails.name}</h2>
          <img src={gameDetails.background_image} alt={gameDetails.name} />
          <p>Rating: {gameDetails.rating}</p>
          
        </div>
      ) : (
        <p>Loading game details...</p>
      )}
    </div>
  );
};

export default GameDetails;

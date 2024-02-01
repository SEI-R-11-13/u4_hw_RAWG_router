import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameDetails = ({ match }) => {
  const [gameDetails, setGameDetails] = useState(null);
  const gameId = match.params.gameId;

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${a31b75fed68b4b7d9f7fe5811bac1406}`);
        setGameDetails(response.data);
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    };

    fetchGameDetails();
  }, [gameId]);

  if (!gameDetails) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <h2>{gameDetails.name}</h2>
    </div>
  );
};

export default GameDetails;
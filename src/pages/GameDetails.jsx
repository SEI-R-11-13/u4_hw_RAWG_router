import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GameDetails = () => {
  const { gameId } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games?page_size=40&games=${gameId}&key=${process.env.VITE_RAWG_KEY}`);
        setGameDetails(response.data);
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    };
    fetchGameDetails();
  }, [gameId]);

  return (
    <div className="game-content">
      <section className="image-container">
        <div>

        </div>
      </section>
      <section className="details">
        <div className="flex-row space">

        </div>
        <div>
          <h3>

          </h3>
        </div>
      </section>
    </div>
  )
}

export default GameDetails

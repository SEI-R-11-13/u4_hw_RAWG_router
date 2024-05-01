import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ViewGames = () => {
  const { genreId } = useParams();
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGamesByGenre = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games?page_size=40&genres=${genreId}&key=${process.env.VITE_RAWG_API_KEY}`);
        setGames(response.data.results);
      } catch (error) {
        
      }
    };
    fetchGamesByGenre();
  }, [genreId]);

  return (
    <div className="view-games">
      <h2>Games for Genre: {genreId}</h2>
      <div className="game-list">
        {games.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            image={game.background_image}
            rating={game.rating}
            
          />
        ))}
      </div>
    </div>
  );
};

export default ViewGames;

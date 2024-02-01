import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameCard from '../components/GameCard';

const ViewGames = (props) => {
  const [genreId, setGenreId] = useState(null);
  const [games, setGames] = useState([]);

  useEffect(() => {
   
    setGenreId(props.match.params.genreId);
    getGamesByGenre();
  }, [props.match.params.genreId]);

  const getGamesByGenre = async () => {
    try {
     
      const response = await axios.get(`https://api.rawg.io/api/games?page_size=40&genres=${genreId}&key=a31b75fed68b4b7d9f7fe5811bac1406`);
      setGames(response.data.results);
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  return (
    <div className="container-grid">
      <h2>Games in Genre</h2>
      <section className="container-grid">
        {games.map((game) => (
          <GameCard
            key={game.id}
            onClick={() => {}}
            image={game.background_image}
            name={game.name}
            rating={game.rating}
          />
        ))}
      </section>
    </div>
  );
};

export default ViewGames;

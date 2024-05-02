import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameCard from '../components/GameCard'


const Home = () => {
  const [genres, setGenres] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = async () => {
    try {
      const response = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}`);
      if (!response.data) {
        throw new Error('Failed to fetch genres');
      }
      setGenres(response.data.results);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const getSearchResults = async () => {
    try {
      const response = await axios.get(`https://api.rawg.io/api/games?search=${searchQuery}&key=${import.meta.env.VITE_RAWG_KEY}`);
      if (!response.data) {
        throw new Error('Failed to fetch search results');
      }
      setSearchResults(response.data.results);
      setSearched(true);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const getGamesByGenre = async (genreId) => {
    try {
      const response = await axios.get(`https://api.rawg.io/api/games?page_size=40&genres=${genreId}&key=${import.meta.env.VITE_RAWG_KEY}`);
      if (!response.data) {
        throw new Error('Failed to fetch games by genre');
      }
      
    } catch (error) {
      console.error('Error fetching games by genre:', error);
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getSearchResults();
  };

  return (
    <div>
      <div className="search">
        <h2>Search Games</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchQuery}
            placeholder="Search Games"
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <section className="search-results container-grid">
          {searched &&
            searchResults.map((game) => (
              <GameCard
                key={game.id}
                name={game.name}
                rating={game.rating}
                image={game.background_image}
              />
            ))}
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <div key={genre.id}>
              <h3>{genre.name}</h3>
              <button onClick={() => getGamesByGenre(genre.id)}>View Games</button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;

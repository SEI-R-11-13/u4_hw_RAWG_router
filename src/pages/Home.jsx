import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from '../components/Search';
import GenreCard from '../components/GenreCard';
import GameCard from '../components/GameCard';


const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = async () => {
    try {
      const response = await axios.get(`https://api.rawg.io/api/genres?key=a31b75fed68b4b7d9f7fe5811bac1406`);
      setGenres(response.data.results);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };
  
  const getSearchResults = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=a31b75fed68b4b7d9f7fe5811bac1406&search=${searchQuery}`
      );
      setSearchResults(response.data.results);
      toggleSearched(true);
      setSearchQuery('');
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };


  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div className="search">
        <h2>Search Results</h2>
        <Search onSubmit={getSearchResults} onChange={handleChange} value={searchQuery} />
        <section className="search-results container-grid">
          {searched &&
            searchResults.map((game) => (
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

      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <GenreCard
              key={genre.id}
              onClick={() => {}}
              image={genre.image}
              name={genre.name}
              gamesCount={genre.games_count}
            />
          ))}
        </section>
      </div>
    </div>
  );
};
export default Home

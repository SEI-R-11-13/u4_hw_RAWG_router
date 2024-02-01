import { useState, useEffect } from 'react'
import axios from 'axios';
import Search from '../components/Search';
import GameCard from '../components/GameCard';
import GenreCard from '../components/GenreCard';


const Home = () => {
  const [genres, setGenres] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const API_KEY = import.meta.env.VITE_RAWG_KEY;

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = async () => {
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    setGenres(response.data.results);
  };

  const handleSearch = async () => {
    const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}`);
    setSearchResults(response.data.results);
  };

  return (
    <div>
      <Search
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSubmit={handleSearch}
      />
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <GenreCard
              key={genre.id}
              image={genre.image}
              name={genre.name}
              gamesCount={genre.gamesCount}
            />
          ))}
        </section>
      </div>
      <div className="search-results">
        <h2>Search Results</h2>
        <section className="container-grid">
          {searchResults.map((game) => (
            <GameCard
              key={game.id}
              image={game.image}
              name={game.name}
              rating={game.rating}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
import { useState, useEffect } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'


const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_RAWG_KEY}`)
     setGenres(response.data.results)
  }

  const getSearchResults = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://api.rawg.io/api/games?search=${searchQuery}&key=${import.meta.env.VITE_RAWG_KEY}`);
    setSearchResults(response.data.results);
    toggleSearched(true);
    setSearchQuery('');
  };
  

  const handleChange = (event) => {
    setSearchQuery(evt.target.value)
  }

  useEffect(() => {
    getGenres();
  }, [])

  return (
    <div>
      <div className="search">
        <h2>Search Results</h2>
        <Search onSubmit={getSearchResults} onChange={handleChange} value={searchQuery} />
        <section className="search-results container-grid">

          {searched &&searchResults.map((result) => (
              <GameCard
                key={result.id}
                name={result.name}
                image={result.background_image}
                rating={result.rating}
                onClick={() => {}}
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
              name={genre.name}
              image={genre.image_background}
              onClick={() => {}}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home

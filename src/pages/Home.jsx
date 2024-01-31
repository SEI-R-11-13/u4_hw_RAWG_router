import { useEffect, useState } from 'react'
import Search from '../components/Search'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
import axios from 'axios'
import { GENRE_URL } from '../globals'
import { SEARCH_PATH } from '../globals'
const API_KEY = import.meta.env.VITE_RAWG_KEY

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }
  
  useEffect (() => {
    const getGenres = async () => {
      const response = await axios.get(`${GENRE_URL}?key=${API_KEY}`)
      setGenres(response.data.results)
    }
    getGenres()
  },[])
  
    const getSearchResults = async (e) => {
      e.preventDefault()
      const response = await axios.get(`${SEARCH_PATH}?key=${API_KEY}&search=${searchQuery}`)
      setSearchResults(response.data.results)
      toggleSearched(!searched)
    }
    getSearchResults()

  return (
    <div>
      <div className="search">
        <h2>Search Results</h2>
        <Search
          value={searchQuery}
          onChange={handleChange}
          onSubmit={getSearchResults}
        />
        {searched && (
          <section className="search-results container-grid">
            {searchResults.map((result) => (
              <GameCard
                key={result.id}
                image={result.background_image}
                name={result.name}
                rating={result.rating}
              />
            ))}
          </section>
        )}
      </div>

      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <GenreCard
              key={genre.id}
              image={genre.image_background}
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

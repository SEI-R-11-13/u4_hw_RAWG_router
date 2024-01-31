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

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await axios.get(`https://api.rawg.io/api/games?search=${searchQuery}&key=${import.meta.env.VITE_RAWG_KEY}`)
    setSearchResults(response.data.results)
    toggleSearched(true)
    setSearchQuery('')
  }

  const handleChange = (evt) => {
 setSearchQuery(evt.target.value)
  }

  useEffect(() => {
getGenres();
  }, [])


  return (
    <div>
      <Search onSubmit={getSearchResults} onChange={handleChange} value={searchQuery} />
      <div className="search">
        <h2>Search Results</h2>
        <section className="search-results container-grid">
        {searched &&
            searchResults.map((result) => (
              <GameCard
                key={result.id}
                onClick={() => {}}
                image={result.background_image}
                name={result.name}
                rating={result.rating}
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
              name={genre.name}
              image={genre.image_background}
              gamesCount={genre.games_count}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home

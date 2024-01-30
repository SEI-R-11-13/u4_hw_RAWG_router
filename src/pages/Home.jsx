import { useState, useEffect } from 'react'
import axios from 'axios'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
import Search from '../components/Search'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  

  const getGenres = async () => {
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_RAWG_KEY}`);
    setGenres(response.data.results)
    console.log(response.data.results)
  }

  const getSearchResults = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&search=${searchQuery}`)
    setSearchResults(response.data.results)
    toggleSearched(true)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    getGenres();
    getSearchResults();
  }, [])

  return (
    <div>
      <div className="search">
          <Search value={searchQuery} onChange={handleChange} onSubmit ={getSearchResults}/>
        <section className="search-results container-grid">
          {searchResults.map((game) => (
            <GameCard name={game.name} rating={game.rating} image={game.background_image}/>
          ))}
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) =>
            <GenreCard name={genre.name} image={genre.image_background} gamesCount={genre.games_count}/>
          )}
        </section>
      </div>
    </div>
  )
}

export default Home

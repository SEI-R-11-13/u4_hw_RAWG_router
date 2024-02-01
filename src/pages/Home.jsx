import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Search from '../components/Search'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'

const API_KEY = import.meta.env.VITE_RAWG_KEY;

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const getGenres = async () => {
    try {
      const genres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
      setGenres(genres.data.results)
      console.log(genres.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    try {
      const games = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}`)
      setSearchResults(games.data.results)
      toggleSearched(!searched)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  // Behavior for loading page
  useEffect(() => {
    getGenres()
  }, []) 

  return (
    <div>
      <div className="search">
        <Search 
          onSubmit={getSearchResults} 
          onChange={handleChange} 
          value={searchQuery} 
        />
        {searched && <h2>Search Results</h2>}
        <section className="search-results container-grid">
          {searchResults.map((game) => (
            <GameCard
              key={game.id}
              name={game.name}
              image={game.background_image}
              rating={game.rating}
              onClick={() => navigate(`/games/details/${game.id}`)}
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
              gamesCount={genre.games_count}
              image={genre.image_background}
              onClick={() => navigate(`/view/games/${genre.id}`)}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home

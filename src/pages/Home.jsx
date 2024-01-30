import { useEffect, useState } from 'react'
import Search from '../components/Search'
import GenreCard from '../components/GenreCard'
import GameCard from '../components/GameCard'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

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
    const response = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&search=${searchQuery}`)  
    setSearchResults(response.data.results)
    toggleSearched(true)
    setSearchQuery('')
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

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
      {searched && (
        searchResults.length > 0 ? (
          <h2>Search Results</h2>
        ) : (
          <h2>Nothing found</h2>
          )
        )}        
        <section className="search-results container-grid">
            { searched ?
              searchResults.map((game) => {
                return (
                    <GameCard
                      key={game.id}
                      name={game.name}
                      rating={game.rating}
                      image={game.background_image}
                      onClick={() => navigate(`/games/details/${game.id}`)}
                    />
                )}) : ''
            }
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          { genres.map((genre) => {
            return (
              <GenreCard
                key={genre.id}
                name={genre.name}
                image={genre.image_background}
                gamesCount={genre.games_count}
                onClick={() => navigate(`/view/games/${genre.id}`)}
              />
            )})
          }
        </section>
      </div>
    </div>
  )
}

export default Home

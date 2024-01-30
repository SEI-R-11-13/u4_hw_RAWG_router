import { useState } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'

const apiKey = import.meta.env.VITE_RAWG_KEY;

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {
    
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    try {
      const games = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}&search=${searchQuery}`)
      setSearchResults(games.data.results)
      toggleSearched(!searched)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const logStates = (e) => {
    e.preventDefault()
    console.log(searchResults)
  }

  return (
    <div>
      <div className="search">
        <Search onSubmit={getSearchResults} onChange={handleChange} value={searchQuery} />
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          {searchResults.map((game) => (
            <GameCard
              key={game.id}
              // onClick={}
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

        </section>
      </div>
      <a href="#" onClick={logStates}>LOG STATES</a>
    </div>
  )
}

export default Home

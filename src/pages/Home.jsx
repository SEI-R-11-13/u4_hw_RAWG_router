import { useEffect, useState } from 'react'
import Search from '../components/Search'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
import axios from 'axios'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getGenres = async () => {
    try {
      const res = await axios.get(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_RAWG_KEY}`)
      console.log(res)
      setGenres(res.data.results)
    } catch (err) {
      console.error(err)
    }
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&search=${searchQuery}`)
      console.log(res)
      setSearchResults(res.data.results)
      toggleSearched(true)
      setSearchQuery('')
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    getGenres()
  }, [])

  return (
    <div>
      <form onSubmit={getSearchResults}>
        <input type="text" placeholder='Search games' onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {searched && searchResults.length !== 0 ? (
        <div className="search">
          <h2>Search Results</h2>
          <section className="search-results container-grid">
            {searchResults.map((game) => (
              <GameCard
                key={game.id}
                onClick=""
                image={game.background_image}
                name={game.name}
                rating={game.rating}
              />
            ))}
          </section>
        </div>
      ) : (
        searched ? (
          <p>No results found</p>
        ) : null
      )}
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.map((genre) => (
            <GenreCard
              key={genre.id}
              image={genre.image_background}
              name={genre.name}
              gamesCount={genre.games_count}
              onClick=""
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home

import { useEffect, useState } from 'react'
import Search from '../components/Search'
import axios from 'axios'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'
import { Link } from 'react-router-dom'

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
    console.log(response.data.results)
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
        <Search getSearchResults={getSearchResults} handleChange={handleChange} searchQuery={searchQuery} />
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          {searched &&
            searchResults.map((result) => (
              <Link to={`/games/details/${result.id}`} key={result.id}>
                <GameCard result={result} />
              </Link>
            ))
          }
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {
            genres.map((genre) => (
              <Link to={`/view/games/${genre.id}`} >
              <GenreCard genre={genre} />
              </Link>
            ))
          }
        </section>
      </div>
    </div>
  )
}

export default Home

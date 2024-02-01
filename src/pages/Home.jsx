import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import GameCard from '../components/GameCard'
import GenreCard from '../components/GenreCard'



const Home = () => {
  const API_KEY = import.meta.env.VITE_RAWG_KEY

  const [genres, setGenres] = useState([])
  const [searchResults, setSearchResults] = useState({})
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  
  const getGenres = async () => {
    let results = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    setGenres((await results).data)
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    try {
      let response = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${searchQuery}`)
      setSearchResults((await response).data)
      toggleSearched(true)
      setSearchQuery('')
    } catch(err) {
      console.log(err)
    }
  }

  const handleChange = (event) => {
    if (event.nativeEvent.data !== null) {
      setSearchQuery(searchQuery + event.nativeEvent.data)
    } else {
      setSearchQuery(searchQuery.slice(0, searchQuery.length - 1))
    }
  } 

  useEffect(() => {
    getGenres()
  }, [])

  useEffect(() => {
    console.log(searchResults)
    console.log(genres.results)
  }, [searchResults, genres])


  return (
    <div>
      <div className="search">
        <Search 
          onSubmit={getSearchResults}
          value={searchQuery}
          onChange={handleChange}
        />
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          {searchResults.results && searchResults.results.map(game => (
            <GameCard key={game.id} image={game.background_image} name={game.name} rating={game.rating} />
          ))
          }
        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
          {genres.results.map(genre => ( <GenreCard key={genre.id}image={genre.image_background} name={genre.name} gamesCount={genre.games_count} /> ))}
        </section>
      </div>
    </div>
  )
}

export default Home

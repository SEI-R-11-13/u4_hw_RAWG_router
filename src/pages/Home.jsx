import { useState, useEffect } from 'react'
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


  useEffect(() => {
    const getGenres = async () => {
      try{
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_RAWG_KEY}`)
        setGenres(response.data.results)
      } catch (error) {
        console.error('error fetching genres:', error)
      }
    } 
  
    getGenres()
  }, [])

  

  const getSearchResults = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.get(`https://api.rawg.io/api/games?search=${searchQuery}&key=${import.meta.env.VITE_RAWG_KEY}`)
      setSearchResults(response.data.results)
      toggleSearched(true)
      setSearchQuery('')
``  } catch(error){
      console.error('error fetching search results', error)
    }
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <div className="search">
        <Search onSubmit={(e)=> getSearchResults(e)} onChange={handleChange} value={searchQuery}/>
        <h2>Search Results</h2>
        <section className="search-results container-grid">

          {searchResults.map((result) => (
            <Link to={`games/details/${result.id}`}>
              <GameCard key={result.id} image={result.background_image} name={result.name} />
            </Link>
          ))}

        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
        {
          genres.map((genre)=> (
            <Link to={`views/games/${genre.id}`}>
              <GenreCard key={genre.id} genre={genre}/>
            </Link>
          )
          )

        }
        </section>
      </div>
    </div>
  )
}

export default Home

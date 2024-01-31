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


  useEffect(() => {
    const getGenres = async () => {
      try{
        const response = await axios.get(`https://api.rawg.io/api/genre?api_key=${import.meta.env.VITE_TMDB_KEY}`)
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
      const response = await axios.get(`https://api.rawg.io/api/games?search=${searchQuery}&api_key=${import.meta.env.VITE_TMDB_KEY}`)
      setSearchResults(response.data.results)
      toggleSearched(true)
      setSearchQuery('')
``  } catch(error){
      console.error('errir fetching search results', error)
    }
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <div className="search">
        <Search />
        <h2>Search Results</h2>
        <section className="search-results container-grid">

        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">

        </section>
      </div>
    </div>
  )
}

export default Home

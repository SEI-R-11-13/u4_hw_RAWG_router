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
        const response = await axios.get(`https://api.rawg.io/api/genre?key=${apiKey}`)
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
      const response = await axios.get(`https://api.rawg.io/api/games?search=${searchQuery}&key=${apiKey}`)
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
        <Search onSubmit={getSearchResults} onChange={handleChange} value={searchQuery}/>
        <h2>Search Results</h2>
        <section className="search-results container-grid">
          {/* Render search results using the map function */}
          {searchResults.map((result) => (
            <GameCard key={result.id} image={result.image} name={result.name} />
          ))}

        </section>
      </div>
      <div className="genres">
        <h2>Genres</h2>
        <section className="container-grid">
        {
          genres.map((genre)=> (
            <GenreCard key={genre.id} genres={genres}/>
          )
          )

        }
        </section>
      </div>
    </div>
  )
}

export default Home

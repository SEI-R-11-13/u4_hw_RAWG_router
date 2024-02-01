import axios from 'axios'
import { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'

const ViewGames = (props) => {
  const [genreId, setGenreId] = useState(null)
  const [games, setGames] = useState([])

  const getGamesByGenre = async () => {
    setGenreId(genre.id)
    const response = await axios.get(`https://api.rawg.io/api/games?page_size=40&genres=${genreId}&key=${import.meta.env.VITE_RAWG_KEY}`)
    console.log(response)
    setGames(response.data.results)
  }

  useEffect(() => {
    console.log("Genre ID:", genreId);
    getGamesByGenre()
  }, [genreId])

  return (
    <div className="container-grid">
      {games.map((game) => (
        <p>{game.name}</p>
      ))}
    </div>
  )
}

export default ViewGames

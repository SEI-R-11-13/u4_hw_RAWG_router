import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ViewGames = (props) => {
  const [genereId, setGenreId] = useState(null)
  const [games, setGames] = useState([])
  const { id } = useParams()
  const selectedGenreId =id


  useEffect(()=>{
    const getGamesByGenre = async () => {
      try {
        if (selectedGenreId) {
          const response = await axios.get(`https://api.rawg.io/api/genres/${selectedGenreId}/games?key=${import.meta.env.VITE_RAWG_KEY}`);
          setGames(response.data.results);
        }
      } catch (error) {
        console.error('Error fetching games:', error);
      }
  
    }
    getGamesByGenre()

  }, [selectedGenreId])

  return (
    <div className="container-grid">
      {games.map((game) => (
        <div key={game.id}>
          {/* Render individual game details */}
          <h2>{game.name}</h2>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  )
}

export default ViewGames
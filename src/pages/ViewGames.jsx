import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import GameCard from '../components/GameCard';

const API_KEY = import.meta.env.VITE_RAWG_KEY;

const ViewGames = (props) => {
  const [games, setGames] = useState([])
  const { genreId } = useParams()
  const navigate = useNavigate()

  const getGamesByGenre = async () => {
    try {
      const games = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&genres=${genreId}&page_size=40`)
      console.log(games.data.results)
      setGames(games.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getGamesByGenre()
  }, [genreId])

  return (
    <div className="container-grid">
      {games.map((game) => (
        <GameCard
          key={game.id}
          name={game.name}
          image={game.background_image}
          rating={game.rating}
          onClick={() => navigate(`/games/details/${game.id}`)}
        />
      ))}
    </div>
  )
}

export default ViewGames
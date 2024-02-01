import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_RAWG_KEY;

const GameDetails = (props) => {
  const [gameDetails, setGameDetails] = useState({})

  const { gameId } = useParams()

  const getGameDetails = async () => {
    try {
      const details = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`)
      console.log(details.data)
      setGameDetails(details.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getGameDetails()
  }, [gameId])

  return (
    <div className="game-content">
      <section className="image-container">
        <div>
          <img src={gameDetails.background_image} alt={gameDetails.name} />
        </div>
      </section>
      <section className="details">
        <div>
          <h3>{gameDetails.name}</h3>
        </div>
        <div className="flex-row space">
          <p>{gameDetails.description_raw}</p>
        </div>
      </section>
    </div>
  )
}

export default GameDetails

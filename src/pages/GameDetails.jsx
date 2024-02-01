import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const GameDetails = (props) => {
  const [gameDetails, setGameDetails] = useState({})
  const {gameId} = useParams()
  console.log(gameDetails)

  useEffect(() => {
    const getGameDetail = async () => {
      const response = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${import.meta.env.VITE_RAWG_KEY}`);
      setGameDetails(response.data)
    }
    getGameDetail()
  }, [gameId])

  return (
    <div className="game-content">
      <section className="image-container">
        <div>
          <img className='img-deets' src={gameDetails.background_image} alt="" />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space deets">
          <h1>{gameDetails.name}</h1>
          <p>{gameDetails.description_raw}</p>
        </div>
        <div>
          <h3>

          </h3>
        </div>
      </section>
    </div>
  )
}

export default GameDetails

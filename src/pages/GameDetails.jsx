import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify';

const GameDetails = (props) => {
  const [gameDetails, setGameDetails] = useState({})

  let { gameId } = useParams()

  useEffect(() => {
    const getGameDetails = async () => {
      const response = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${import.meta.env.VITE_RAWG_KEY}`)  
      setGameDetails(response.data)
    }
    getGameDetails()
  }, [gameId])

  const cleanHTML = DOMPurify.sanitize(gameDetails.description);

  return (
    <div className="game-content">
      <section className="image-container">
        <div>
          <h1>{gameDetails.name}</h1>
          <img src={gameDetails.background_image} alt={gameDetails.name} />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          <h3>Released: {gameDetails.released}</h3>
          <h3>MetaCritic Score: {gameDetails.metacritic}</h3>
          <h3>Rating: {gameDetails.rating}</h3>
        </div>
        <br />
        <div>
          <h3>Description</h3>
          <div class="description" dangerouslySetInnerHTML={{ __html: cleanHTML }}></div>
        </div>
      </section>
    </div>
  )
}

export default GameDetails

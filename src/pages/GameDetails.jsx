import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const GameDetails = (props) => {
  const [gameDetails, setGameDetails] = useState({});
  const { id } = useParams();
  const gameId =id

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        if (gameId) {
          const response = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=${import.meta.env.VITE_RAWG_KEY}`);
          setGameDetails(response.data);
        }
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    };

    fetchGameDetails();
  }, [gameId]);

  return (
    <div className="game-content">
      <section className="image-container">
        <div>
          {gameDetails.background_image && (
            <img src={gameDetails.background_image} alt={gameDetails.name} />
          )}
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          <p>Released: {gameDetails.released}</p>
          <p>Rating: {gameDetails.rating}</p>
          {/* Add more details as needed */}
        </div>
        <div>
          <h3>{gameDetails.name}</h3>
          <p>{gameDetails.description_raw}</p>
        </div>
      </section>
    </div>
  );
};

export default GameDetails;

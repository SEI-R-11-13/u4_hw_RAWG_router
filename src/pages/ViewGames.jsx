import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import GameCard from '../components/GameCard'
import { useNavigate } from 'react-router-dom'

const ViewGames = ({ name }) => {
  const navigate = useNavigate()
  const [games, setGames] = useState([])
  const [genreName, setGenreName] = useState('')
  const [page, setPage] = useState(1)

  let { genreId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const gamesResponse = await axios.get(`https://api.rawg.io/api/games?page=${page}&page_size=40&genres=${genreId}&key=${import.meta.env.VITE_RAWG_KEY}`);
      if (page === 1) {
        setGames(gamesResponse.data.results);
      } else {
        setGames((prevGames) => [...prevGames, ...gamesResponse.data.results]); // Append new games
      }

      if (page === 1) {
        const genreResponse = await axios.get(`https://api.rawg.io/api/genres/${genreId}?key=${import.meta.env.VITE_RAWG_KEY}`);
        setGenreName(genreResponse.data.name);
      }
    };

    fetchData();
  }, [genreId, page]);

  const loadMoreGames = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <div className="page-title-container">
        <h1>
          {genreName}
        </h1>
      </div>
      <div className="container-grid">
        {games.map((game) => {
          return (
            <GameCard
              key={game.id}
              name={game.name}
              rating={game.rating}
              image={game.background_image}
              onClick={() => navigate(`/games/details/${game.id}`)}
            />
          )
        })}
      </div>
      <div className="load-more-container">
        <button onClick={loadMoreGames} className="load-more-button">Load More</button>
        <button onClick={scrollToTop} className="back-to-top-button">Back to Top</button>
      </div>
    </div>
  )
}

export default ViewGames

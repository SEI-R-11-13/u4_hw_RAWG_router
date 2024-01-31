import './styles/App.css'
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ViewGames from './pages/ViewGames'
import GameDetails from './pages/GameDetails'
import About from './pages/About'


const App = () => {

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/views/games/:id" element={<ViewGames />} /> 
          <Route path="/games/details/:id" element={<GameDetails />} /> 
          <Route path="/about" element={< About />} /> 
        </Routes>
      </main>
    </div>
  )
}

export default App

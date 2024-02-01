import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import ViewGames from './pages/ViewGames'
import GameDetails from './pages/GameDetails'
import './styles/App.css'

const App = () => {

  return (
    <div>
    <Header />
    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/viewgames" element={<ViewGames />} />
        <Route path="/viewgames/:id" element={<GameDetails />} />
      </Routes>
    </main>
  </div>
  )
}

export default App

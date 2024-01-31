import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header' 
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ViewGames from './pages/ViewGames.jsx'
import GameDetails from './pages/GameDetails.jsx'

const App = () => {

  return (
    <div>
      <Header />
        <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/viewgames" element={<ViewGames />} />
          <Route path="/viewgames/:id" element={<GameDetails />} />
      </Routes>
    </main>
  </div>
  
  )
}

export default App

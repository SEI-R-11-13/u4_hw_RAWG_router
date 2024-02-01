import './styles/App.css'
import { Routes, Route } from 'react-router-dom' 
import Header from './components/Header'
import GameCard from './components/GameCard'
import GenreCard from './components/GenreCard'
import Search from './components/Search'
import About from './pages/About'
import Home from './pages/Home'
const App = () => {

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />
          <Route 
            path='/about'
            element={<About />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App

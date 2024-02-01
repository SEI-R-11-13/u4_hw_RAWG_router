import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import GenreCard from './components/GenreCard'
import GameCard from './components/GameCard'
import Search from './components/Search'
import About from './pages/About'
import Home from './pages/Home'

// Other component imports here

//...
const App = () => {
  return(
  <div>
    <Header />
    <main>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genres" element={<GenreCard />} />
          <Route path="/games" element={<GameCard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </main>
  </div>
)}

export default App

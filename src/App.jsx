import './styles/App.css'
import Header from './components/Header'
import GenreCard from './components/GenreCard'
import GameCard from './components/GameCard'
import About from './pages/About'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'


const App = () => {

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='' element={} />
          <Route path='' element={} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App

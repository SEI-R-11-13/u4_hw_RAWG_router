import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Search from './components/Search'
import Home from './pages/Home'
import About from './pages/About'
import GenreCard from './components/GenreCard'

const App = () => {

  return (
    <div>
    <Header />
    <main>
      <Routes>
      <Route path="/" element={<Home/>} /> 
         <Route path="search" element={<Search/>} /> 
         <Route path="/about" element={<About/>} /> 
        
        {/* // <Route path="" element={} />
        // <Route path="" element={} />
        // <Route path="" element={} /> */}
      </Routes>
    </main>
  </div>
  )
}

export default App

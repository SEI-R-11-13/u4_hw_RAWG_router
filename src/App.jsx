import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'

const App = () => {

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='' element={} />
          <Route path='' element={} />
          <Route path='' element={} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App

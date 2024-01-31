import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/About'

const App = () => {

  return (
    <div>
      <header><Header /></header>
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          {/* <Route path="" element={} /> */}
          {/* <Route path="" element={} /> */}
          {/* <Route path="" element={} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App

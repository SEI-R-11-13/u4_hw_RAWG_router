import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import ViewGames from './pages/ViewGames';
import GameDetails from './pages/GameDetails';
import GameCard from './components/GameCard'; 
import './styles/App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="main-wrapper"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/viewgames" element={<ViewGames />} />
          <Route path="/gamedetails/:id" element={<GameDetails />} />
          <Route path="/gamecard/:id" element={<GameCard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

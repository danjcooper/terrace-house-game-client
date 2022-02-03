import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  GameOptionsPage,
  Home,
  About,
  Game,
  NotFound,
  LeaderBoard,
} from './pages';
import { Nav } from './components';

import './style.css';

const App = () => {
  return (
    <main>
      {/* <Nav /> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/season-select' element={<GameOptionsPage />} />
        <Route path='/play' element={<Game />} />
        <Route path='/leaderboard' element={<LeaderBoard />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;

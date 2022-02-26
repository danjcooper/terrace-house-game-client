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
import { Nav, Timer } from './components';

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
        <Route path='/test' element={<Timer duration={'10'} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;

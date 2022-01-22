import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { SeasonSelector } from './components';
import { GameOptionsPage } from './pages';

import './style.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<GameOptionsPage />} />
    </Routes>
  );
};

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>TERRACE</h1>
      <h1>HOUSE</h1>
      <h1>STATS</h1>
      <button type='button'>
        <Link to='/season-select'>Play</Link>
      </button>
      <button type='button'>
        <Link to='/leaderboard'>Leaderboard</Link>
      </button>
      <Link to='/about'>About this game.</Link>
    </>
  );
};

export default Home;

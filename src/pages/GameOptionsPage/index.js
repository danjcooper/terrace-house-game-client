import React, { useState } from 'react';
import { SeasonSelector } from '../../components';

const GameOptionsPage = () => {
  const [selectedSeasons, setSelectedSeason] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    let inputs = e.target.querySelectorAll('input');
    inputs = Array.from(inputs);

    let temp = [];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        temp.push(inputs[i].value);
      }
    }
    console.log(temp);
    setSelectedSeason(temp);
  };
  return (
    <main>
      <h1>Game Options Page</h1>
      <form onSubmit={handleFormSubmit}>
        <SeasonSelector />
        <button>Play</button>
      </form>
    </main>
  );
};

export default GameOptionsPage;

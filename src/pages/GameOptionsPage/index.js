import React, { useState } from 'react';
import { SeasonSelector } from '../../components';
import { useNavigate } from 'react-router-dom';

const GameOptionsPage = () => {
  const navigate = useNavigate();
  const [selectedSeasons, setSelectedSeason] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let inputs = e.target.querySelectorAll('input');
    inputs = Array.from(inputs);

    let temp = [];
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        temp.push(inputs[i].value);
      }
    }
    setSelectedSeason(temp);
  };
  return (
    <>
      <h1>Game Options Page</h1>
      <form onSubmit={handleFormSubmit}>
        <SeasonSelector />
        <button>Play</button>
      </form>

      {selectedSeasons
        ? navigate('/play', { state: { seasons: selectedSeasons } })
        : null}
    </>
  );
};

export default GameOptionsPage;

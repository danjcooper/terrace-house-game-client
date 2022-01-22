import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Game = () => {
  const { state } = useLocation();
  const [seasonData, setSeasonData] = useState(null);

  useEffect(() => {
    if (state) {
      setSeasonData(state.seasons);
    }
  }, []);

  //
  return (
    <>
      {seasonData ? (
        <h1>{seasonData[0]}</h1>
      ) : (
        <h1>Opps, no data was passed in.</h1>
      )}
    </>
  );
};

export default Game;

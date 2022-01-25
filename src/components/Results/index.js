import React, { useEffect } from 'react';

const Results = ({
  winner,
  updateGameStatus,
  updateLives,
  updateScore,
  lives,
}) => {
  useEffect(() => {
    if (winner) {
      updateScore(1000, winner);
    } else {
      updateLives(winner);
    }

    setTimeout(() => {
      if (lives > 0) {
        updateGameStatus('GUESSING');
      } else {
        updateGameStatus('END');
      }
    }, 2000);
  }, []);

  return <>{winner ? <h1>Correct</h1> : <h1>Incorrect</h1>}</>;
};

export default Results;

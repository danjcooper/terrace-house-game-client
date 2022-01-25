import React, { useEffect } from 'react';

const Results = ({
  winner,
  updateGameStatus,
  updateLives,
  updateScore,
  lives,
}) => {
  useEffect(() => {
    setTimeout(() => {
      if (lives > 0) {
        updateGameStatus('GUESSING');
      } else {
        updateGameStatus('END');
      }
    }, 2000);

    if (winner) {
      updateScore(1000, winner);
    } else {
      updateLives(winner);
    }
  }, []);

  return <>{winner ? <h1>Correct</h1> : <h1>Incorrect</h1>}</>;
};

export default Results;

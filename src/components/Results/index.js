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
      updateScore(1, winner);
    } else {
      updateLives(winner);
    }

    handleModalAnimation();

    setTimeout(() => {
      if (lives > 0) {
        updateGameStatus('GUESSING');
      } else {
        updateGameStatus('END');
      }
    }, 2000);
  }, []);

  const handleModalAnimation = () => {
    const modal = document.getElementById('modal');
    modal.classList.toggle('active');
  };

  return (
    <>
      <div id='modal' onClick={handleModalAnimation}>
        {winner ? <h1>Correct</h1> : <h1>Incorrect</h1>}
      </div>
    </>
  );
};

export default Results;

import React, { useEffect } from 'react';

const Results = ({ winner, updateGameStatus }) => {
  useEffect(() => {
    setTimeout(() => {
      updateGameStatus('GUESSING');
    }, 2000);
  }, []);

  return <>{winner ? <h1>Correct</h1> : <h1>Incorrect</h1>}</>;
};

export default Results;

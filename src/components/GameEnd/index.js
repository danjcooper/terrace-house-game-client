import React from 'react';

const GameEnd = (props) => {
  return (
    <>
      <h1>You scored {props.score}</h1>
      <h2>Your Highest Streak was {props.streak}</h2>
    </>
  );
};

export default GameEnd;

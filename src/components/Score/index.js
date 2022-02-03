import React from 'react';

const Score = ({ score }) => {
  const style = { margin: '5px' };
  return (
    <section>
      <p style={style}>Score: {score}</p>
    </section>
  );
};

export default Score;

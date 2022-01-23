import React, { useEffect } from 'react';

const SpecialEvent = ({ eventInfo, updateScore, updateLives }) => {
  useEffect(() => {
    if (eventInfo.special) {
      updateLives(eventInfo.positive);
    } else {
      updateScore(1000, eventInfo.positive);
    }
  }, []);

  return (
    <>
      <h1>Oh my god.</h1>
      <h2>{eventInfo.description}</h2>
    </>
  );
};

export default SpecialEvent;

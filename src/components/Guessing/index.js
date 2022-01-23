import React from 'react';

const Guessing = ({ roundData }) => {
  console.log(roundData);
  return (
    <>
      <h1>Guessing</h1>
      <h2>{roundData.question.text}</h2>
      <h3>{roundData.housemateOne.housematename}</h3>
      <h3>{roundData.housemateTwo.housematename}</h3>
      <h3></h3>
    </>
  );
};

export default Guessing;

import React from 'react';

const Guessing = ({ roundData, updateGameStatus, setWinner }) => {
  const handleClick = (e) => {
    const result = e.target.innerText === roundData.winner ? true : false;
    setWinner(result);
    updateGameStatus('RESULTS');
  };

  return (
    <>
      <h2>{roundData.question.text}</h2>
      <h3>{roundData.housemateOne.housematename}</h3>
      <p>
        {roundData.housemateOne.nickname
          ? roundData.housemateOne.nickname
          : null}
      </p>
      <button onClick={handleClick}>
        {roundData.housemateOne.housematename}
      </button>
      <h3>{roundData.housemateTwo.housematename}</h3>
      <button onClick={handleClick}>
        {roundData.housemateTwo.housematename}
      </button>
    </>
  );
};

export default Guessing;

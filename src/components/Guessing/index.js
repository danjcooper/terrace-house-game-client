import React from 'react';

const Guessing = ({ roundData, updateGameStatus, setWinner }) => {
  const handleClick = (e) => {
    const result = e.target.innerText === roundData.winner ? true : false;
    setWinner(result);
    updateGameStatus('RESULTS');
  };

  return (
    <>
      <hr />
      <button onClick={handleClick}>
        {roundData.housemateOne.housematename}
      </button>
      <p>
        {roundData.housemateOne.nickname
          ? roundData.housemateOne.nickname
          : null}
      </p>
      <p className='season-name'>{roundData.housemateOne.seasonname}</p>

      <hr />
      <h2>{roundData.question.text}</h2>
      <hr />
      <button onClick={handleClick}>
        {roundData.housemateTwo.housematename}
      </button>
      <p className='season-name'>{roundData.housemateTwo.seasonname}</p>
    </>
  );
};

export default Guessing;

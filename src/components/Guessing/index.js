import React from 'react';
import style from './style.module.css';

// TODO - Refactor how results page is handled

const Guessing = ({ roundData, updateGameStatus, setWinner }) => {
  const imgSrc = '../../assets/img';

  const handleClick = (e) => {
    const result =
      e.target.closest('section').id === roundData.winner ? true : false;
    setWinner(result);

    console.log(e.target.closest('section').id);

    updateGameStatus('RESULTS');
  };

  return (
    <>
      <section
        id={roundData.housemateOne.housematename}
        onClick={handleClick}
        className={style.housemate}
      >
        <h1>{roundData.housemateOne.housematename}</h1>
        <img src={`${imgSrc}${roundData.housemateOne.imageurl}`} />
        <p>
          {roundData.housemateOne.nickname
            ? roundData.housemateOne.nickname
            : null}
        </p>
        <p className='season-name'>{roundData.housemateOne.seasonname}</p>
      </section>

      <section className={style.question}>
        <h2>{roundData.question.text}</h2>
      </section>

      <section
        id={roundData.housemateOne.housematename}
        onClick={handleClick}
        className={style.housemate}
      >
        <h1>{roundData.housemateTwo.housematename}</h1>
        <p>
          {roundData.housemateTwo.nickname
            ? roundData.housemateTwo.nickname
            : null}
        </p>
        <p className='season-name'>{roundData.housemateTwo.seasonname}</p>
        <img src={`${imgSrc}${roundData.housemateTwo.imageurl}`} />
      </section>
    </>
  );
};

export default Guessing;

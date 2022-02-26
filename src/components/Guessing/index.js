import React, { useState } from 'react';
import style from './style.module.css';

import { Housemate } from '../';

// TODO - Refactor how results page is handled

const Guessing = ({ roundData, updateGameStatus, setWinner }) => {
  const imgSrc = '../../assets/img';

  const handleClick = (e) => {
    const result =
      e.target.closest('section').id === roundData.winner ? true : false;
    setWinner(result);

    console.log(e.target.closest('section').id);
  };

  return (
    <>
      <Housemate housemateData={roundData.housemateOne} />

      <section className={style.question}>
        <h2>{roundData.question.text}</h2>
      </section>

      <Housemate housemateData={roundData.housemateTwo} />
    </>
  );
};

export default Guessing;

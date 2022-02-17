import React from 'react';

import style from './style.module.css';
import imgSrc from '../../assets/img/logo.png';

const Housemate = ({ housemateData }) => {
  const handleClick = (e) => {
    console.log(e.target.closest('section').id);
  };

  return (
    <section
      id={housemateData.housematename}
      onClick={handleClick}
      className={style.housemate}
    >
      {/* <img src={`${imgSrc}${housemateData.imageurl}`} /> */}
      <img src={imgSrc} />
      <h1>{housemateData.housematename}</h1>

      <p>{housemateData.nickname ? housemateData.nickname : null}</p>
      <p className='season-name'>{housemateData.seasonname}</p>
    </section>
  );
};

export default Housemate;

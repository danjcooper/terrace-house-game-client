import React, { useEffect, useState } from 'react';

const Timer = ({ duration }) => {
  const [width, setWidth] = useState('0');

  useEffect(() => {
    setWidth('100%');
  }, []);

  let style = {
    width: width,
    height: '10px',
    transition: `all ${duration}s linear`,
    background: '#64c368',
  };

  return (
    <>
      <div style={style}></div>
    </>
  );
};

export default Timer;

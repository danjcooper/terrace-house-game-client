import React from 'react';

const Results = (props) => {
  return <>{props.winner ? <h1>Correct</h1> : <h1>Incorrect</h1>}</>;
};

export default Results;

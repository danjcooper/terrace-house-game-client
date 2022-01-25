import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
  convertSeasonCodes,
  generateApiString,
  gameStates,
  getRadomNumberWithMax,
  questions,
  calculateWinner,
  isDraw,
} from '../../helpers';
import {
  Loading,
  Results,
  GameEnd,
  SpecialEvent,
  Score,
  Guessing,
} from '../../components';

const Game = () => {
  const { state } = useLocation();
  const [seasonCodes, setSeasonCodes] = useState([]);
  const [housemateData, setHousemateData] = useState(null);
  const [specialEventsData, setSpecialEventsData] = useState(null);
  const [gameStatus, setGameStatus] = useState();

  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(1);
  const [winner, setWinner] = useState(null);

  const baseUrl = 'https://terrace-house-server.herokuapp.com/';

  useEffect(() => {
    if (state) {
      const temp = [];
      state.seasons.forEach((season) => {
        temp.push(convertSeasonCodes(season));
      });
      setSeasonCodes(temp);
    }
  }, []);

  useEffect(() => {
    const getHousemateData = async () => {
      let housemateData = await axios.get(
        `${baseUrl}housemates/${generateApiString(seasonCodes)}`
      );
      let eventData = await axios.get(
        `${baseUrl}effects/${generateApiString(seasonCodes)}`
      );

      setHousemateData(housemateData.data);
      setSpecialEventsData(eventData.data);
      setGameStatus(gameStates.GUESSING);
    };

    if (seasonCodes.length > 0) {
      getHousemateData();
    }
  }, [seasonCodes]);

  const updateScore = (value, positive) => {
    let newScore = score;
    positive ? (newScore += value) : (newScore -= value);
    setScore(newScore);
  };

  const updateLives = (positive) => {
    let newLifeCount = lives;
    positive ? newLifeCount++ : newLifeCount--;
    if (newLifeCount <= 0) {
      setGameStatus(gameStates.END);
    }

    setLives(newLifeCount);
  };

  const createRoundData = () => {
    let question = questions[getRadomNumberWithMax(questions.length - 1)];
    const housemateOne =
      housemateData[getRadomNumberWithMax(housemateData.length - 1)];
    let housemateTwo =
      housemateData[getRadomNumberWithMax(housemateData.length - 1)];

    let draw = true;
    let tryCount = 0;

    while (draw === true) {
      if (
        housemateTwo.housematename === housemateOne.housematename ||
        tryCount === questions.length - 1
      ) {
        housemateTwo =
          housemateData[getRadomNumberWithMax(housemateData.length - 1)];
      }
      question = questions[getRadomNumberWithMax(questions.length - 1)];
      draw = isDraw(question, housemateOne, housemateTwo);
      console.log(draw);
      tryCount++;
    }

    const winner = calculateWinner(housemateOne, housemateTwo, question.id);

    const output = {
      housemateOne: housemateOne,
      housemateTwo: housemateTwo,
      question: question,
      winner: winner,
    };

    return output;
  };

  const renderGameComponent = () => {
    switch (gameStatus) {
      case gameStates.GUESSING:
        return (
          <Guessing
            roundData={createRoundData()}
            updateGameStatus={updateGameStatus}
            setWinner={setWinner}
          />
        );
      case gameStates.RESULTS:
        return (
          <Results
            winner={winner}
            updateLives={updateLives}
            updateScore={updateScore}
            updateGameStatus={updateGameStatus}
            lives={lives}
          />
        );
      case gameStates.LOADING:
        return <Loading />;
      case gameStates.SPECIALEVENT:
        return (
          <SpecialEvent
            eventInfo={
              specialEventsData[
                Math.ceil(Math.random() * specialEventsData.length)
              ]
            }
            updateScore={updateScore}
            updateLives={updateLives}
          />
        );
      case gameStates.END:
        return <GameEnd score={score} streak={69} />;

      default:
        return <h1>Default</h1>;
    }
  };

  const updateGameStatus = (newStatus) => {
    setGameStatus(newStatus);
  };

  //
  return (
    <>
      <Score score={score} />
      <p>Lives: {lives}</p>

      {seasonCodes ? (
        renderGameComponent()
      ) : (
        <h1>Opps, no data was passed in.</h1>
      )}
    </>
  );
};

export default Game;

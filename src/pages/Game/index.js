import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  convertSeasonCodes,
  generateApiString,
  gameStates,
} from '../../helpers';
import { Loading, Results, GameEnd, SpecialEvent } from '../../components';

const Game = () => {
  const { state } = useLocation();
  const [seasonCodes, setSeasonCodes] = useState([]);
  const [housemateData, setHousemateData] = useState(null);
  const [specialEventsData, setSpecialEventsData] = useState(null);
  const [gameStatus, setGameStatus] = useState(null);

  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  let baseUrl = 'https://terrace-house-server.herokuapp.com/';

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

  const renderGameComponent = () => {
    switch (gameStatus) {
      case gameStates.GUESSING:
        return <h1>Guessing</h1>;
      case gameStates.RESULTS:
        return <Results winner={false} />;
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
      <p>Score: {score}</p>
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

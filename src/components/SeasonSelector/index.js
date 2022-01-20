import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SeasonSelector = (props) => {
  const [seasonsData, setSeasonsData] = useState(null);
  const [selectedSeasons, setSelectedSeasons] = useState([]);

  useEffect(() => {
    const getSeasonsData = async () => {
      const response = await axios.get(
        'https://terrace-house-server.herokuapp.com/seasons'
      );
      setSeasonsData(response.data);
    };
    getSeasonsData();
  }, []);

  const generateSeasonButtons = (data) => {
    return (
      <>
        {data.map((item) => (
          <label key={item.seasonid} onClick={handleClick}>
            {item.seasonname}
            <input type='checkbox' value={item.seasonname} />
          </label>
        ))}
      </>
    );
  };

  const toggleSelectedSeasons = (season) => {
    const seasonAlreadySelected = selectedSeasons.includes(season)
      ? true
      : false;

    const newSeasonsArr = selectedSeasons.slice(0);

    if (seasonAlreadySelected) {
      const indexOfSeason = newSeasonsArr.indexOf(season);
      newSeasonsArr.splice(indexOfSeason, 1);
    } else {
      newSeasonsArr.push(season);
    }
    setSelectedSeasons(newSeasonsArr);
  };

  const handleClick = (e) => {
    e.target.classList.toggle('active');
    toggleSelectedSeasons(e.target.closest('input').value);
  };

  return (
    <>
      <h2>Season selector</h2>
      {seasonsData ? generateSeasonButtons(seasonsData) : <h1>Loading Data</h1>}
    </>
  );
};

export default SeasonSelector;

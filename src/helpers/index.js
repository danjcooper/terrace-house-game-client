const gameStates = {
  GUESSING: 'GUESSING',
  RESULTS: 'RESULTS',
  LOADING: 'LOADING',
  SPECIALEVENT: 'SPECIALEVENT',
  END: 'END',
};

const convertSeasonCodes = (seasonName) => {
  let seasonCode = '';

  for (let i = 0; i < seasonName.length; i++) {
    if (
      (seasonName[i] === seasonName[i].toUpperCase() ||
        seasonName[i - 1] === ' ') &&
      seasonName[i] !== ' '
    ) {
      seasonName[i] === '/'
        ? null
        : (seasonCode += seasonName[i].toUpperCase());
    }
  }
  return seasonCode;
};

const generateApiString = (seasons) => {
  let apiString = '';
  for (let i = 0; i < seasons.length; i++) {
    if (i !== 0) {
      apiString += '+';
    }
    apiString += seasons[i];
  }
  return apiString;
};

module.exports = { gameStates, convertSeasonCodes, generateApiString };

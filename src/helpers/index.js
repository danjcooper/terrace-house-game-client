const gameStates = {
  GUESSING: 'GUESSING',
  RESULTS: 'RESULTS',
  LOADING: 'LOADING',
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
      seasonCode += seasonName[i].toUpperCase();
    }
  }
  console.log(seasonCode);
  return seasonCode;
};

module.exports = { gameStates, convertSeasonCodes };

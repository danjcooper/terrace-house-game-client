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

const getRadomNumberWithMax = (max) => {
  return Math.ceil(Math.random() * max);
};

const questions = [
  { id: 0, text: 'Who was in the house longer?' },
  { id: 1, text: 'Who went on more dates?' },
  { id: 2, text: 'Who is older now?' },
  { id: 3, text: 'Who was older when they first entered the house?' },
  { id: 4, text: 'Who was has more instagram followers?' },
  { id: 5, text: 'Who lived with more housemates?' },
];

const calculateWinner = (housemateOne, housemateTwo, questionId) => {
  let winnerName;

  switch (questionId) {
    case 0:
      winnerName =
        housemateOne.weeksinhouse > housemateTwo.weeksinhouse
          ? housemateOne.housematename
          : housemateTwo.housematename;
      break;
    case 1:
      winnerName =
        housemateOne.dates > housemateTwo.dates
          ? housemateOne.housematename
          : housemateTwo.housematename;
      break;
    case 2:
      winnerName =
        housemateOne.agenow > housemateTwo.agenow
          ? housemateOne.housematename
          : housemateTwo.housematename;
      break;
    case 3:
      winnerName =
        housemateOne.agewhenentered > housemateTwo.agewhenentered
          ? housemateOne.housematename
          : housemateTwo.housematename;
      break;
    case 4:
      winnerName =
        housemateOne.instagramfollowers > housemateTwo.instagramfollowers
          ? housemateOne.housematename
          : housemateTwo.housematename;
      break;
    case 5:
      winnerName =
        housemateOne.livedwith > housemateTwo.livedwith
          ? housemateOne.housematename
          : housemateTwo.housematename;
      break;

    default:
      break;
  }
  return winnerName;
};

module.exports = {
  gameStates,
  convertSeasonCodes,
  generateApiString,
  getRadomNumberWithMax,
  questions,
  calculateWinner,
};

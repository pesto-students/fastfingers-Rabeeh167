import dictionary from "../../data/dictionary.json";

export const GameLevel = {
  EASY: "EASY",
  MEDIUM: "MEDIUM",
  HARD: "HARD"
};

export const DifficultyFactor = {
  [GameLevel.EASY]: 1,
  [GameLevel.MEDIUM]: 1.5,
  [GameLevel.HARD]: 2
};

export const SessionKeys = {
  PLAYERNAME: "playername",
  DIFFICULTYLEVEL: "difficultylevel",
  SELECTEDGAMELEVEL: "selectedgamelevel",
  PRESENTSCORE: "presentscore",
  TOTALSCORES: "totalscores"
};

export const UpdateGameLevelByDifficultyFactor = (difficultyFactor) => {
  let calculatedDifficulty = null;
  if (difficultyFactor < DifficultyFactor.MEDIUM) {
    calculatedDifficulty = GameLevel.EASY;
  } else if (difficultyFactor < DifficultyFactor.HARD) {
    calculatedDifficulty = GameLevel.MEDIUM;
  } else {
    calculatedDifficulty = GameLevel.HARD;
  }

  const currentDifficulty = sessionStorage.getItem(SessionKeys.DIFFICULTYLEVEL);

  if (calculatedDifficulty !== currentDifficulty) {
    sessionStorage.setItem(SessionKeys.DIFFICULTYLEVEL, calculatedDifficulty);
  }
  return calculatedDifficulty;
};

export const getHighScore = () => {
  const playerName = sessionStorage.getItem(SessionKeys.PLAYERNAME);
  const scores = sessionStorage.getItem(getNameOfCurrentUserScores(playerName));
  const scoresArray = scores ? scores.trim().split(" ") : [];
  if (scoresArray.length === 0) {
    return Number(0);
  }
  const highestScore = scoresArray.reduce((prev, current) => {
    return Math.max(Number(prev), Number(current));
  });
  return highestScore;
};

export const getNameOfCurrentUserScores = (playerName) => {
  return `${playerName}_${SessionKeys.TOTALSCORES}`;
};

const MIN_DURATION = 2;
export const calculateDuration = (randomWord, difficultyFactor) => {
  let durationCalculated = Math.ceil(randomWord.length / difficultyFactor);

  if (durationCalculated < MIN_DURATION) {
    durationCalculated = MIN_DURATION;
  }
  return durationCalculated;
};

const getRandomIndex = (arrayLength) => {
  return Math.floor(Math.random() * arrayLength);
};

const generateRandomWord = () => {
  const randomIndex = getRandomIndex(dictionary.length);
  return dictionary[randomIndex];
};

const checkWordMatchDifficulty = (randomWord, difficulty) => {
  let doWordMatchDifficulty = false;
  switch (difficulty) {
    case GameLevel.EASY:
      if (randomWord.length <= 4) {
        doWordMatchDifficulty = true;
      }
      break;

    case GameLevel.MEDIUM:
      if (randomWord.length <= 8 && randomWord.length >= 5) {
        doWordMatchDifficulty = true;
      }
      break;

    case GameLevel.HARD:
      if (randomWord.length > 8) {
        doWordMatchDifficulty = true;
      }
      break;

    default:
      throw new Error("Game Level Error");
  }
  return doWordMatchDifficulty;
};

export function getRandomWordForCurrentLevel(difficulty) {
  let randomWord = generateRandomWord();
  while (!checkWordMatchDifficulty(randomWord, difficulty)) {
    randomWord = generateRandomWord();
  }
  return randomWord;
}

export const secondsToMilliseconds = (seconds) => {
    return seconds * 1000;
  };
  
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 50;
  const ALERT_THRESHOLD = 25;
  
  const COLOR_CODES = {
    info: {
      color: "red"
    },
    warning: {
      color: "red",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };
  
  export const formatTimeLeft = (time) => {
    let seconds = Math.floor(time / 1000);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
  
    let milliseconds = Math.round((time % 1000) / 10);
    if (milliseconds < 10) {
      milliseconds = `0${milliseconds}`;
    }
  
    return `${seconds}:${milliseconds}`;
  };
  
  export const calculateCircleDasharray = (duration, remainingTime) => {
    return `${(
      calculateTimeFraction(duration, remainingTime) * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
  };
  
  const calculateTimeFraction = (duration, remainingTime) => {
    const fraction = remainingTime / duration;
    return fraction - (1 / duration) * (1 - fraction);
  };
  
  export const calculateRemainingPathColor = (duration, timeLeft) => {
    const { alert, warning, info } = COLOR_CODES;
  
    const timeLeftPercent = (timeLeft / duration) * 100;
  
    if (timeLeftPercent <= alert.threshold) {
      return alert.color;
    } else if (timeLeftPercent <= warning.threshold) {
      return warning.color;
    }
    return info.color;
  };
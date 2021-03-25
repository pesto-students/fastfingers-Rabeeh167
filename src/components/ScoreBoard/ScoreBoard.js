import React from "react";
import {
  SessionKeys,
  getNameOfCurrentUserScores,
  getHighScore
} from "../Common/Functions";
import "./ScoreBoard.scss";

export default function ScoreBoard() {
  const playerName = sessionStorage.getItem(SessionKeys.PLAYERNAME);
  const currentUserScores = sessionStorage.getItem(
    getNameOfCurrentUserScores(playerName)
  );

  const currentUserScoresArray = currentUserScores.trim().split(" ");

  const highestScore = getHighScore();
  const scoreBoardContent = currentUserScores ? (
    <div>
    <ul className="score-list">
      {currentUserScoresArray.map((score, index) => (
        <li
          key={index}
        >
          {`Game ${index + 1} : ${score}`}
        </li>
      ))}
    </ul>
    <ul className="score-list best-score">
        <li className="highest-score">
        {`Best Score : ${highestScore}`}
        </li>
    </ul>
    </div>
  ) : null;

  return (
    <div className="scoreboard-inside">
      <h1 className="score-title">SCORE BOARD</h1>
      {scoreBoardContent}
    </div>
  );
}
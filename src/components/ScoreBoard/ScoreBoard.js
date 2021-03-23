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
    <ul className="score-list">
      {currentUserScoresArray.map((score, index) => (
        <li
          key={index}
          className={`${highestScore === Number(score) ? "highest-score" : ""}`}
        >
          {`Game ${index + 1} : ${score}`}
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <div className="scoreboard-inside">
      <h1 className="score-title">SCORE BOARD</h1>
      {scoreBoardContent}
    </div>
  );
}
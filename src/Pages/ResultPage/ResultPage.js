import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import HomePage from "../HomePage/HomePage";
import reload_image from "../../assets/reload.png";
import "./ResultPage.scss";
import {
  SessionKeys,
  getNameOfCurrentUserScores
} from "../../components/Common/Functions";

export default function ResultPage({ playAgain }) {
  const playerName = sessionStorage.getItem(SessionKeys.PLAYERNAME);
  const currentUserScores = sessionStorage.getItem(
    getNameOfCurrentUserScores(playerName)
  );
  const currentUserScoresArray = currentUserScores
    ? currentUserScores.trim().split(" ")
    : 1;
  const gameName = currentUserScoresArray.length;

  const [isNewGame, setIsNewGame] = useState(false);

  const currentScore =
    Number(sessionStorage.getItem(SessionKeys.PRESENTSCORE)) ?? 0;

  const quitGame = () => {
    sessionStorage.clear();
    setIsNewGame(true);
  };

  return isNewGame ? (
    <HomePage />
  ) : (
    <main>
      <Header
        difficulty={sessionStorage.getItem(SessionKeys.DIFFICULTYLEVEL)}
        isGameOver={true}
      />
      <section className="score-body-section">
        <div className="score-container">
          <div className="score-heading">{`SCORE : GAME ${gameName}`}</div>
          <div className="score-count">{currentScore}</div>
        </div>

        <button className="end-game-button" onClick={playAgain}>
          <img
            className="reload-image"
            src={reload_image}
            alt="Reload Button"
          />
          PLAY AGAIN
        </button>

        <div className="quit-game-container">
          <button className="quit-game-button" onClick={quitGame}>
            QUIT
          </button>
        </div>
      </section>
    </main>
  );
}

ResultPage.propTypes = {
  playAgain: PropTypes.func.isRequired
};
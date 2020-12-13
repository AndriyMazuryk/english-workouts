import React from "react";

const Results = ({ title, rightAnswers, wrongAnswers, setCurrentTest }) => {
  return (
    <div className="results">
      <h2 className="results__title">{title}</h2>
      <h2 className="results__text">Your results are:</h2>
      <p className="results__right">Right answers: {rightAnswers}</p>
      <p className="results_wrong">Wrong answers: {wrongAnswers}</p>
      <button className="results__button" onClick={() => setCurrentTest("")}>
        Go back
      </button>
    </div>
  );
};

export default Results;

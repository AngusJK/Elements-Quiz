import React from 'react';
import { Link } from 'react-router-dom';

const SymbolScores = function({ symbolScores }) {
  function compare(a, b) {
    const scoreA = a.score;
    const scoreB = b.score;
    let comparison = 0;
    if (scoreA > scoreB) {
      comparison = -1;
    } else if (scoreA < scoreB) {
      comparison = 1; 
    }
    return comparison;
  }
  const scoresInOrder = symbolScores.sort(compare);
  return (
    <div>
      <h3>High scores for symbols game</h3>
      <ul>
        {scoresInOrder.map(score => (
          <li key={score.key}>name: {score.name}, score: {score.score}</li>
        ))}
      </ul>
      <Link to="/">
        Go Back
      </Link>
    </div>
  )
};

export default SymbolScores;
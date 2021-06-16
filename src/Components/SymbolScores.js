import React from 'react';
import { Link } from 'react-router-dom';
import { compare } from '../Utils';

const SymbolScores = function({ symbolScores }) {
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
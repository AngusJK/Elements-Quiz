import React from 'react';
import { Link } from 'react-router-dom';
import { compare } from '../Utils';

const NumberScores = function({ numberScores }) {
  const scoresInOrder = numberScores.sort(compare);
  return (
    <div>
      <h3>High scores for numbers game</h3>
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

export default NumberScores;
import React from 'react';
import { Link } from 'react-router-dom';
import { compare } from '../Utils';

const NameScores = function({ nameScores }) {
  const scoresInOrder = nameScores.sort(compare);
  return (
    <div>
      <h3>High scores for name game</h3>
      <ul>
        {scoresInOrder.map(score => (
          <li key={score.key}>name: {score.name}, score: {score.score}</li>
        ))}
      </ul>
      <Link to="/">
        <div><button className="btn">Go Back</button></div>
      </Link>
    </div>
  )
};

export default NameScores;
import React from 'react';
import { Link } from 'react-router-dom';
import { compare } from '../Utils';

const NameScores = function({ nameScores }) {
  const scoresInOrder = nameScores.sort(compare);
  return (
    <div>
      <h3>High scores for name game</h3>
      <table className="high-scores">
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
        {scoresInOrder.map(score => (
          <tr key={score.key}>
            <td>{score.name}</td>
            <td>{score.score}</td>
          </tr>
        ))}
      </table>
      <Link to="/">
        <div><button className="btn">Go Back</button></div>
      </Link>
    </div>
  )
};

export default NameScores;
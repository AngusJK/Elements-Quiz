import React from 'react';
import { Link } from 'react-router-dom';
import { compare } from '../Utils';

const NumberScores = function({ numberScores }) {
  const scoresInOrder = numberScores.sort(compare);
  return (
    <div id="high-scores">
      <h3>High scores for Game 2</h3>
      <table className="high-scores">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scoresInOrder.map(score => (
            <tr key={score.key}>
              <td>{score.name}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">
        <div><button className="btn escape-btn">Go Back</button></div>
      </Link>
    </div>
  )
};

export default NumberScores;
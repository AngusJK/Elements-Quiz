import React from 'react';
import { Link } from 'react-router-dom';
import { compare } from '../Utils';

const SymbolScores = function({ symbolScores }) {
  const scoresInOrder = symbolScores.sort(compare);
  return (
    <div id="high-scores">
      <h3>High scores for Game 3</h3>
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

export default SymbolScores;
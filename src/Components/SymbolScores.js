import React from 'react';
import { Link } from 'react-router-dom';

const SymbolScores = function({ symbolScores }) {
  return (
    <div>
      <h3>High scores for symbol game</h3>
      <h5>Name: {symbolScores[0].name}, Score: {symbolScores[0].score}</h5>
      <Link to="/">
        Go Back
      </Link>
    </div>
  )
};

export default SymbolScores;
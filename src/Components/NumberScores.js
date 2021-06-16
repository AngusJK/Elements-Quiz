import React from 'react';
import { Link } from 'react-router-dom';

const NumberScores = function({ numberScores }) {
  return (
    <div>
      <h3>High scores for number game</h3>
      <h5>Name: {numberScores[0].name}, Score: {numberScores[0].score}</h5>
      <Link to="/">
        Go Back
      </Link>
    </div>
  )
};

export default NumberScores;
import React from 'react';
import { Link } from 'react-router-dom';

const GuessNumber = function() {
  return(
    <div>
      <h1 className="home">Guess the Number</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  )
}

export default GuessNumber;
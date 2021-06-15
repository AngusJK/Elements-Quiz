import React from 'react';
import { Link } from 'react-router-dom';

const GuessSymbol = function() {
  return(
    <div>
      <h1 className="home">Guess the Symbol</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  )
}

export default GuessSymbol;
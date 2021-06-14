import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = function() {
  return(
    <div className="home">
      <h1>Home Page</h1>
      <h3>Enter your Name</h3>
      <h3>Choose a game</h3>
      <ul className="nav-links">
        <Link to="/guessname">
          <li>Game 1</li>
        </Link>
        <Link to="/guessnumber">
          <li>Game 2</li>
        </Link>
        <Link to="/guesssymbol">
          <li>Game 3</li>
        </Link>
      </ul>
    </div>
  )
}

export default Home;
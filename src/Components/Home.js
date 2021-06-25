import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = function({ 
    userName, 
    setUserName, 
    inputText, 
    setInputText, 
    users, 
    setUsers
  }) {
  const handleUsers = (user) => {
    const newUsers = [...users];
    newUsers.push(user);
    setUsers(newUsers);
  };
  const createUser = (e) => {
    e.preventDefault();
    handleUsers(inputText);
    setUserName(inputText);
    e.target.reset();
  };
  const inputTextHandler = (e) => {
    setInputText(e.target.value.trim());
  }
  const logOutUser = () => {
    setUserName('');
  }
  if (userName) {
    return (
      <div className="home-page">
        <h2>Welcome, {userName}.</h2>
        <h3>Choose a game to play:</h3>
        <ul className="nav-links">
          <li>Game 1 - guess the name from the symbol provided</li>
          <Link to="/guessname">
            <button className="btn play">
              Play
            </button>
          </Link>
          <Link to="/namescores">
            <button className="btn high-scores">
              High Scores
            </button>
          </Link>
          <li>Game 2 - guess the atomic number from the name provided</li>
          <Link to="/guessnumber">
            <button className="btn play">
              Play
            </button>
          </Link>
          <Link to="/numberscores">
            <button className="btn high-scores">
              High Scores
            </button>
          </Link>
          <li>Game 3 - guess the chemical symbol from the name provided</li>
          <Link to="/guesssymbol">
            <button className="btn play">
              Play
            </button>
          </Link>
          <Link to="/symbolscores">
            <button className="btn high-scores">
              High Scores
            </button>
          </Link>
        </ul> 
        <button onClick={logOutUser} className="logout">Log Out</button>
      </div>
    )
  } else {
    return (
      <div className="sign-in-form">
        <h3 id="enter-name">Please sign in</h3>
        <form action="" onSubmit={createUser} className="username-form">
          <input onChange={inputTextHandler} type="text" className="name-input" placeholder="name"/>
          <div><button className="btn name-submit">SUBMIT</button></div>
        </form>
      </div>
    )
  }
}

export default Home;
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
      <div>
        <h2>Welcome, {userName}.</h2>
        <h3>Choose a game to play:</h3>
        <ul className="nav-links">
          <Link to="/guessname">
            <li>Game 1 - guess the name from the symbol provided</li>
          </Link>
          <Link to="/namescores">
            <li>Name High Scores</li>
          </Link>
          <Link to="/guessnumber">
            <li>Game 2 - guess the atomic number from the name provided</li>
          </Link>
          <Link to="/numberscores">
            <li>Number High Scores</li>
          </Link>
          <Link to="/guesssymbol">
            <li>Game 3 - guess the chemical symbol from the name provided</li>
          </Link>
          <Link to="/symbolscores">
            <li>Symbol High Scores</li>
          </Link>
        </ul> 
        <button onClick={logOutUser}>Log Out</button>
      </div>
    )
  } else {
    return (
      <div className="sign-in-form">
        <h3 id="enter-name">Please sign in</h3>
        <form action="" onSubmit={createUser} className="username-form">
          <input onChange={inputTextHandler} type="text" className="name-input" placeholder="name"/>
          <div><button className="name-submit">SUBMIT</button></div>
        </form>
      </div>
    )
  }
}

export default Home;
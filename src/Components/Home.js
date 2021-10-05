import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../App.css'

const Home = function ({
  userName,
  setUserName,
  inputText,
  setInputText,
  users,
  setUsers
}) {
  const handleUsers = (user) => {
    const newUsers = [...users]
    newUsers.push(user)
    setUsers(newUsers)
  }
  const createUser = (e) => {
    e.preventDefault()
    handleUsers(inputText)
    setUserName(inputText)
    e.target.reset()
  }
  const inputTextHandler = (e) => {
    setInputText(e.target.value.trim())
  }
  const logOutUser = () => {
    setUserName('')
  }
  if (userName) {
    return (
      <div className="home-page">
        
        <h4 id="choice">Welcome, {userName}. Choose a game to play:</h4>
        <ul className="nav-links">
          <div className="game">
            <li>Game 1 - guess the element name from the symbol provided</li>
            <div>
            <Link to="/guessname">
              <button className="btn play">
                Play
              </button>
            </Link>
            </div>
            <Link to="/namescores">
              <button className="btn high-scores">
                High Scores
              </button>
            </Link>
          </div>
          <div className="game">
            <li>Game 2 - guess the atomic number from the element name provided</li>
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
          </div>
          <div className="game">
            <li>Game 3 - guess the chemical symbol from the element name provided</li>
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
          </div>
        </ul>
        <button onClick={logOutUser} className="btn logout">Log Out</button>
      </div>
    )
  } else {
    return (
      <div className="sign-in-form">
        <h3 id="enter-name">Please sign in</h3>
        <form action="" onSubmit={createUser} className="username-form">
          <input onChange={inputTextHandler} type="text" className="name-input" placeholder="name" autoFocus/>
          <div><button className="btn name-submit">SUBMIT</button></div>
        </form>
      </div>
    )
  }
}

Home.propTypes = {
  userName: PropTypes.string,
  setUserName: PropTypes.func,
  inputText: PropTypes.string,
  setInputText: PropTypes.func,
  users: PropTypes.array,
  setUsers: PropTypes.func
}

export default Home

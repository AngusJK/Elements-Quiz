import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const GuessSymbol = function ({
  inputText,
  setInputText,
  elements,
  currentElement,
  setCurrentElement,
  questionsAsked,
  setQuestionsAsked,
  correctAnswers,
  setCorrectAnswers,
  userName,
  gameOver,
  setGameOver,
  symbolScores,
  setSymbolScores,
  gameStarted,
  setGameStarted
}) {
  const setNewElementName = () => {
    const num = Math.floor(Math.random() * 118)
    setCurrentElement(elements[num])
  }
  const updateSymbolScores = (name, number) => {
    const latestScore = { key: symbolScores.length + 1, name: name, score: +number }
    const newScores = [...symbolScores]
    newScores.push(latestScore)
    setSymbolScores(newScores)
  }
  const submitAnswerHandler = (e) => {
    e.preventDefault()
    setQuestionsAsked(questionsAsked + 1)
    if (currentElement.symbol === inputText) {
      setCorrectAnswers(correctAnswers + 1)
    } else {
      setGameOver(true)
      setGameStarted(false)
      if (questionsAsked > 0) { updateSymbolScores(userName, questionsAsked) }
    }
    e.target.reset()
    setNewElementName()
  }
  const inputTextHandler = (e) => {
    setInputText(e.target.value.trim())
  }
  const reset = () => {
    setQuestionsAsked(0)
    setCorrectAnswers(0)
    setCurrentElement('')
    setGameOver(false)
    setGameStarted(false)
  }
  const replay = () => {
    setQuestionsAsked(0)
    setCorrectAnswers(0)
    setNewElementName()
    setGameOver(false)
    setGameStarted(true)
  }
  const startGame = () => {
    setNewElementName()
    setGameStarted(true)
  }
  const capitalize = function (s) {
    if (typeof (s) !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  if (gameOver) {
    return (
      <div className="game-over">
        <h1 className="game-over-headline">GAME OVER</h1>
        <h3>Your score: {correctAnswers}</h3>
        <button className="btn start-game-btn" onClick={replay}>Play Again</button>
        <Link to="/">
          <button onClick={reset} className="btn escape-btn">Home</button>
        </Link>
      </div>
    )
  } else if (gameStarted === false) {
    return (
      <div className="question">
        <p>In this game you will be given the name of an element from the Periodic Table and you must give its atomic number. Questions continue until you get one wrong. Remember to capitalize the first letter! Good luck, {userName}!</p>
        <div><button className="btn start-game-btn" onClick={startGame}>Start Game</button></div>
        <Link to="/">
          <button className="btn escape-btn" onClick={reset}>Hell no.</button>
        </Link>
      </div>
    )
  } else {
    return (
      <div className="game-on">
        <p>What is the Chemical Symbol of this element?:</p>
        <div>
          <h1>{capitalize(currentElement.name)}</h1>
        </div>
        <form action="" className="answer" onSubmit={submitAnswerHandler}>
          <input className="answer-input"
            id="symbol-answer-input"
            onChange={inputTextHandler}
            type="text"
            autoComplete="off"
            maxLength="2"
            required
            autoFocus/>
        </form>
        <h3>Questions answered: {questionsAsked}</h3>
        <Link to="/">
          <button className="btn escape-btn" onClick={reset}>Home</button>
        </Link>
      </div>
    )
  }
}

GuessSymbol.propTypes = {
  inputText: PropTypes.string,
  setInputText: PropTypes.func,
  elements: PropTypes.array,
  currentElement: PropTypes.any,
  setCurrentElement: PropTypes.func,
  questionsAsked: PropTypes.number,
  setQuestionsAsked: PropTypes.func,
  correctAnswers: PropTypes.number,
  setCorrectAnswers: PropTypes.func,
  userName: PropTypes.string,
  gameOver: PropTypes.bool,
  setGameOver: PropTypes.func,
  symbolScores: PropTypes.array,
  setSymbolScores: PropTypes.func,
  gameStarted: PropTypes.bool,
  setGameStarted: PropTypes.func
}

export default GuessSymbol

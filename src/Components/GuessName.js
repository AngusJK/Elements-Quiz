import React from 'react'
import { Link } from 'react-router-dom'

const GuessName = function ({
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
  nameScores,
  setNameScores,
  gameStarted,
  setGameStarted
}) {
  const setNewSymbol = () => {
    const num = Math.floor(Math.random() * 118)
    setCurrentElement(elements[num])
  }
  const startGame = () => {
    setNewSymbol()
    setGameStarted(true)
  }
  const updateNameScores = (name, number) => {
    const latestScore = { key: nameScores.length + 1, name: name, score: +number }
    const newScores = [...nameScores]
    newScores.push(latestScore)
    setNameScores(newScores)
  }
  const submitAnswerHandler = (e) => {
    e.preventDefault()
    setQuestionsAsked(questionsAsked + 1)
    if (currentElement.name === inputText) {
      setCorrectAnswers(correctAnswers + 1)
    } else {
      setGameOver(true)
      setGameStarted(false)
      if (questionsAsked > 0) { updateNameScores(userName, questionsAsked) }
    }
    e.target.reset()
    setNewSymbol()
  }
  const inputTextHandler = (e) => {
    setInputText(e.target.value.trim().toLowerCase())
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
    setNewSymbol()
    setGameOver(false)
    setGameStarted(true)
  }
  if (gameOver) {
    return (
      <div className="game-over">
        <h1 className="game-over-headline">GAME OVER</h1>
        <h3>You got {correctAnswers} answers correct</h3>
        <button className="btn start-game-btn" onClick={replay}>Play Again</button>
        <Link to="/">
          <button className="btn escape-btn" onClick={reset}>Home</button>
        </Link>
      </div>
    )
  } else if (gameStarted === false) {
    return (
      <div className="question">
        <p>In this game you will be shown a symbol from the Periodic Table and you have to name the element that that symbol designates. The questions continue until you get an answer wrong. Good luck, {userName}! And remember, spelling counts! </p>
        <div><button className="btn start-game-btn" onClick={startGame}>Start Game</button></div>
        <Link to="/">
          <button className="btn escape-btn">Hard pass. Take me back.</button>
        </Link>
      </div>
    )
  } else {
    return (
      <div className="game-on">
        <div className="stage">
          <h1>{currentElement.symbol}</h1>
        </div>
        
        <form action="" className="answer-form" onSubmit={submitAnswerHandler}>
          <input className="answer-input"
            onChange={inputTextHandler}
            type="text"
            required
            autoFocus/>
        </form>
        
        <h4>Correct answers: {questionsAsked}</h4>
        <Link to="/">
          <button className="btn escape-btn" onClick={reset}>Home</button>
        </Link>
      </div>
    )
  }
}

export default GuessName

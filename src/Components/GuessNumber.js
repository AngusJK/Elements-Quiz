import React from 'react';
import { Link } from 'react-router-dom';

const GuessNumber = function({ 
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
  numberScores,
  setNumberScores,
  gameStarted,
  setGameStarted
  }) {
const setNewElementName = () => {
  let num = Math.floor(Math.random() * 118);
  setCurrentElement(elements[num]);
}
const updateNumberScores = (name, number) => {
  const latestScore = { key: numberScores.length + 1, name: name, score: +number };
  const newScores = [...numberScores];
  newScores.push(latestScore);
  setNumberScores(newScores);
}
const submitAnswerHandler = (e) => {
  e.preventDefault();
  setQuestionsAsked(questionsAsked + 1);
  if(currentElement.atno.toString() === inputText) {
    setCorrectAnswers(correctAnswers + 1);
  } else {
    setGameOver(true);
    setGameStarted(false);
    if(questionsAsked > 0) {updateNumberScores(userName, questionsAsked)};
  }
  e.target.reset();
  setNewElementName();
}

const inputTextHandler = (e) => {
  setInputText(e.target.value.trim());
}
const reset = () => {
  setQuestionsAsked(0);
  setCorrectAnswers(0);
  setCurrentElement('');
  setGameOver(false);
  setGameStarted(false);
}
const replay = () => {
  setQuestionsAsked(0);
  setCorrectAnswers(0);
  setNewElementName();
  setGameOver(false);
  setGameStarted(true);
}
const startGame = () => {
  setNewElementName();
  setGameStarted(true);
}
const capitalize = function(s) {
  if (typeof(s) !== 'string') return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
if (gameOver) { return (
  <div className="game-over">
    <h1 className="game-over-headline">GAME OVER</h1>
    <h3>Your score: {correctAnswers}</h3>
    <button className="btn start-game-btn" onClick={replay}>Play Again</button>
    <Link to="/">
      <button className="btn escape-btn" onClick={reset}>Home</button>
    </Link>
  </div>
)} else if (gameStarted === false) { 
  return (
    <div className="question">
      <p>In this game you will be shown the name of an element and you must type it's Atomic Number. Get as many consecutive answers correct as you can. Good luck, {userName}!</p>
      <div><button className="btn start-game-btn" onClick={startGame}>Start Game</button></div>
      <Link to="/">
        <button className="btn escape-btn">Yikes! Get me out of here!</button>
      </Link>
    </div>
  )} else {
    return (
      <div className="game-on">
        <p>What is the Atomic Number of this element?:</p>
        <div>
          <h1>{capitalize(currentElement.name)}</h1>
        </div>
        <form action="" className="answer" onSubmit={submitAnswerHandler}>
          <input className="answer-input"
          id="number-answer-input"
          onChange={inputTextHandler}
          type="text"
          autoComplete="off"
          maxLength="3"
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

export default GuessNumber;
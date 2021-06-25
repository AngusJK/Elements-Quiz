import React from 'react';
import { Link } from 'react-router-dom';

const GuessSymbol = function({ 
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
  let num = Math.floor(Math.random() * 118);
  setCurrentElement(elements[num]);
}
const updateSymbolScores = (name, number) => {
  const latestScore = { key: symbolScores.length + 1, name: name, score: +number };
  const newScores = [...symbolScores];
  newScores.push(latestScore);
  setSymbolScores(newScores);
}
const submitAnswerHandler = (e) => {
  e.preventDefault();
  setQuestionsAsked(questionsAsked + 1);
  if(currentElement.symbol === inputText) {
    setCorrectAnswers(correctAnswers + 1);
  } else {
    setGameOver(true);
    setGameStarted(false);
    if(questionsAsked > 0) {updateSymbolScores(userName, questionsAsked)};
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
  setGameStarted(false)
}
const startGame = () => {
  setNewElementName();
  setGameStarted(true);
}
const capitalize = function(s) {
  if (typeof(s) !== 'string') return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
if (gameOver) {
  return(
    <div>
      <h1>GAME OVER</h1>
      <h3>Your score: {correctAnswers}</h3>
      <Link to="/">
        <button onClick={reset} className="escape-btn">Home</button>
      </Link>
    </div>
  )} else if (gameStarted === false) {
    return(
      <div className="question">
        <h3>Welcome, {userName}.</h3>
        <p>In this game you will be given the name of an element from the Periodic Table and you must give it's atomic number. Questions continue until you get one wrong. Remember to capitalize the first letter! Good luck!</p>
        <div><button className="btn start-game-btn" onClick={startGame}>Start Game</button></div>
        <Link to="/">
          <button className="btn escape-btn" onClick={reset}>Hell no.</button>
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        <p>What is the Chemical Symbol of this element?:</p>
        <div>
          <h1>{capitalize(currentElement.name)}</h1>
        </div>
        <form action="" className="answer" onSubmit={submitAnswerHandler}>
          <input onChange={inputTextHandler} type="text" placeholder="type your answer here" />
        </form>
        <h3>Questions answered: {questionsAsked}</h3>
        <Link to="/">
          <button className="btn escape-btn" onClick={reset}>Home</button>
        </Link>
      </div>
    )
  }
}

export default GuessSymbol;
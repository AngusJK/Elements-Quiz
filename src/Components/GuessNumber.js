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
  setGameOver
  }) {
const setNewElementName = () => {
  let num = Math.floor(Math.random() * 50);
  setCurrentElement(elements[num]);
}
const submitAnswerHandler = (e) => {
  e.preventDefault();
  setQuestionsAsked(questionsAsked + 1);
  if(currentElement.atno.toString() === inputText) {
    setCorrectAnswers(correctAnswers + 1);
  } else {
    setGameOver(true);
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
  setGameOver(false)
}
const capitalize = function(s) {
  if (typeof(s) !== 'string') return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
if (gameOver) { return (
  <div>
    <div>
      <h1>GAME OVER</h1>
      <h3>Your score: {correctAnswers}</h3>
      <Link to="/">
        <button onClick={reset}>Home</button>
      </Link>
    </div>
  </div>
)} else { 
  return (
    <div className="question">
      <h3>Welcome, {userName}. Good luck!</h3>
      <button className="start-game" onClick={setNewElementName}>Start Game</button>
      <p>What is the Atomic Number of this element?:</p>
      <div>
        <h1>{capitalize(currentElement.name)}</h1>
      </div>
      <form action="" className="answer" onSubmit={submitAnswerHandler}>
        <input onChange={inputTextHandler} type="text" placeholder="type your answer here" />
      </form>
      <h3>Questions answered: {questionsAsked}</h3>
      <button className="reset" onClick={reset}>Reset</button>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  )}
}

export default GuessNumber;
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
  setCorrectAnswers
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
}
const capitalize = function(s) {
  if (typeof(s) !== 'string') return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

return (
  <div className="question">
    <button className="start-game" onClick={setNewElementName}>Start Game</button>
    <p>What is the Atomic Number of this element?:</p>
    <div>
      <h1>{capitalize(currentElement.name)}</h1>
    </div>
    <form action="" className="answer" onSubmit={submitAnswerHandler}>
      <input onChange={inputTextHandler} type="text" placeholder="type your answer here" />
    </form>
    <h3>Your score: {correctAnswers}/{questionsAsked}</h3>
    <button className="reset" onClick={reset}>Reset</button>
    <Link to="/">
      <button>Home</button>
    </Link>
  </div>
)
}

export default GuessNumber;
import React from 'react';

const GuessName = function({ 
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
  const setNewSymbol = () => {
    let num = Math.floor(Math.random() * 50);
    setCurrentElement(elements[num]);
  }
  const submitAnswerHandler = (e) => {
    e.preventDefault();
    setQuestionsAsked(questionsAsked + 1);
    if(currentElement.name === inputText) {
      setCorrectAnswers(correctAnswers + 1);
    }
    e.target.reset();
    setNewSymbol();
  }
  const inputTextHandler = (e) => {
    setInputText(e.target.value.trim().toLowerCase());
  }
  const reset = () => {
    setQuestionsAsked(0);
    setCorrectAnswers(0);
    setCurrentElement('');
  }
  
  return (
    <div className="question">
      <button className="start-game" onClick={setNewSymbol}>Start Game</button>
      <p>Name the element with this symbol:</p>
      <div className="stage">
        <h1>{currentElement.symbol}</h1>
      </div>
      <form action="" className="answer" onSubmit={submitAnswerHandler}>
        <input onChange={inputTextHandler} type="text" placeholder="type your answer here" />
      </form>
      <h3>Your score: {correctAnswers}/{questionsAsked}</h3>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  )
}

export default GuessName;
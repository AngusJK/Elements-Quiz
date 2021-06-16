import React from 'react';
import { Link } from 'react-router-dom';

const GuessName = function({ 
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
    setNameScores
    }) {
  const setNewSymbol = () => {
    let num = Math.floor(Math.random() * 50);
    setCurrentElement(elements[num]);
  };
  const updateNameScores = (name, number) => {
    const latestScore = { key: nameScores.length + 1, name: name, score: +number };
    console.log(latestScore);
    const newScores = [...nameScores];
    newScores.push(latestScore);
    setNameScores(newScores);
  }
  const submitAnswerHandler = (e) => {
    e.preventDefault();
    setQuestionsAsked(questionsAsked + 1);
    if (currentElement.name === inputText) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setGameOver(true);
      updateNameScores(userName, questionsAsked)
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
    setGameOver(false);
  }
  if (gameOver) {
    return (
      <div>
        <h1>GAME OVER</h1>
        <h3>Your score: {correctAnswers}</h3>
        <Link to="/">
          <button onClick={reset}>Home</button>
        </Link>
      </div>
    )
  } else {
    return (
      <div className="question">
        <h3>Welcome, {userName}. Good luck!</h3>
        <button className="start-game" onClick={setNewSymbol}>Start Game</button>
        <p>Name the element with this symbol:</p>
        <div className="stage">
          <h1>{currentElement.symbol}</h1>
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
    )
  }
  
}

export default GuessName;
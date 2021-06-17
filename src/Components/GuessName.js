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
    setNameScores,
    gameStarted,
    setGameStarted
    }) {
  const setNewSymbol = () => {
    let num = Math.floor(Math.random() * 118);
    setCurrentElement(elements[num]);
  };
  const startGame = () => {
    setNewSymbol();
    setGameStarted(true);
  }
  const updateNameScores = (name, number) => {
    const latestScore = { key: nameScores.length + 1, name: name, score: +number };
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
      setGameStarted(false)
      if(questionsAsked > 0) {updateNameScores(userName, questionsAsked)}
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
  } else if (gameStarted === false){
    return (
      <div className="question">
        <h3>Welcome, {userName}!</h3>
        <p>In this game you will be shown a symbol from the Periodic Table and you have to name the element that that symbol designates. The questions continue until you get an answer wrong. Good luck! And remember, spelling counts! </p>
        <div><button className="start-game-btn" onClick={startGame}>Start Game</button></div>
        <Link to="/">
          <button className="escape-btn">Hard pass. Take me back.</button>
        </Link>
      </div>
    )
  } else {
    return (
      <div>
        <div className="stage">
          <h1>{currentElement.symbol}</h1>
        </div>
        <form action="" className="answer" onSubmit={submitAnswerHandler}>
          <input className="answer-input" onChange={inputTextHandler} type="text" placeholder="type your answer here" />
        </form>
        <h3>Correct answers: {questionsAsked}</h3>
        <Link to="/">
          <button className="escape-btn">Home</button>
        </Link>
      </div>
    )
  }
}

export default GuessName;
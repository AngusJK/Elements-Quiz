import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Home from './Components/Home';
import GuessName from './Components/GuessName';
import GuessNumber from './Components/GuessNumber';
import GuessSymbol from './Components/GuessSymbol';
import NameScores from './Components/NameScores';
import NumberScores from './Components/NumberScores';
import SymbolScores from './Components/SymbolScores';

import Elements from './DATA';

function App() {
  const elements = Elements;
  const [users, setUsers] = useState([]);
  const [currentElement, setCurrentElement] = useState('');
  const [inputText, setInputText] = useState('');
  const [questionsAsked, setQuestionsAsked] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userName, setUserName] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [nameScores, setNameScores] = useState([{ key: 1, name: "Marie", score: 15 }, { key: 2, name: "Glenn", score: 9 }, { key: 3, name: "Wilhelm", score: 7 }, { key: 4, name: "Ernest", score: 4 }]);
  const [numberScores, setNumberScores] = useState([{ key: 1, name: "Albert", score: 9 }, { key: 2, name: "Lise", score: 8 }, { key: 3, name: "Nicolaus", score: 6 }, { key: 4, name: "Enrico", score: 5 }]);
  const [symbolScores, setSymbolScores] = useState([{ key: 1, name: "Dmitri", score: 13 }, { key: 2, name: "Alfred", score: 10 }, { key: 3, name: "Yuri", score: 9 }, { key: 4, name: "Niels", score: 2 }]);
  useEffect(() => {
    localStorage.setItem('nameScores', JSON.stringify(nameScores));
  }, [nameScores]);
  return (
    <Router>
      <div className="container">
        <Header title="The Elements"/>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} 
            userName={userName}
            setUserName={setUserName}
            inputText={inputText}
            setInputText={setInputText}
            users={users}
            setUsers={setUsers}
            />}
          />      
          <Route path="/guessname" render={(props) => <GuessName {...props} 
            elements={elements}  
            currentElement={currentElement}
            setCurrentElement={setCurrentElement}
            inputText={inputText}
            setInputText={setInputText}
            questionsAsked={questionsAsked}
            setQuestionsAsked={setQuestionsAsked}
            correctAnswers={correctAnswers}
            setCorrectAnswers={setCorrectAnswers}
            userName={userName}
            gameOver={gameOver}
            setGameOver={setGameOver}
            nameScores={nameScores}
            setNameScores={setNameScores}
            gameStarted={gameStarted}
            setGameStarted={setGameStarted}
            />}
          />
          <Route path="/guessnumber" render={(props) => <GuessNumber {...props} 
            elements={elements}  
            currentElement={currentElement}
            setCurrentElement={setCurrentElement}
            inputText={inputText}
            setInputText={setInputText}
            questionsAsked={questionsAsked}
            setQuestionsAsked={setQuestionsAsked}
            correctAnswers={correctAnswers}
            setCorrectAnswers={setCorrectAnswers}
            userName={userName}
            gameOver={gameOver}
            setGameOver={setGameOver}
            numberScores={numberScores}
            setNumberScores={setNumberScores}
            gameStarted={gameStarted}
            setGameStarted={setGameStarted}
            />} 
          />
          <Route path="/guesssymbol" render={(props) => <GuessSymbol {...props} 
            elements={elements}  
            currentElement={currentElement}
            setCurrentElement={setCurrentElement}
            inputText={inputText}
            setInputText={setInputText}
            questionsAsked={questionsAsked}
            setQuestionsAsked={setQuestionsAsked}
            correctAnswers={correctAnswers}
            setCorrectAnswers={setCorrectAnswers}
            userName={userName}
            gameOver={gameOver}
            setGameOver={setGameOver}
            symbolScores={symbolScores}
            setSymbolScores={setSymbolScores}
            gameStarted={gameStarted}
            setGameStarted={setGameStarted}
            />} 
          />
          <Route path="/namescores" render={(props) => <NameScores {...props}
            nameScores={nameScores}
            />}
          />
          <Route path="/numberscores" render={(props) => <NumberScores {...props}
            numberScores={numberScores}
            />}
          />
          <Route path="/symbolscores" render={(props) => <SymbolScores {...props}
            symbolScores={symbolScores}
            />}
          />  
        </Switch>
      </div>
    </Router>  
  );
}

export default App;

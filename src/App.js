import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Home from './Components/Home';
import GuessName from './Components/GuessName';
import GuessNumber from './Components/GuessNumber';
import GuessSymbol from './Components/GuessSymbol';

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
            />} 
          />
        </Switch>
      </div>
    </Router>  
  );
}

export default App;

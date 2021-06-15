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
  const [currentElement, setCurrentElement] = useState('');
  const [inputText, setInputText] = useState('');
  const [questionsAsked, setQuestionsAsked] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userName, setUserName] = useState('');
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
            />} 
          />
        </Switch>
      </div>
    </Router>  
  );
}

export default App;

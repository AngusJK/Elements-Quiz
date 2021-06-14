import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import GuessName from './Components/GuessName';
import GuessNumber from './Components/GuessNumber';
import GuessSymbol from './Components/GuessSymbol';

//import Answer from './Components/Answer';
import Elements from './DATA';

function App() {
  const elements = Elements;
  const [currentElement, setCurrentElement] = useState('');
  const [inputText, setInputText] = useState('');
  const [questionsAsked, setQuestionsAsked] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  return (
    <div className="container">
      <Header title="The Elements"/>
      <GuessName 
        elements={elements}  
        currentElement={currentElement}
        setCurrentElement={setCurrentElement}
        inputText={inputText}
        setInputText={setInputText}
        questionsAsked={questionsAsked}
        setQuestionsAsked={setQuestionsAsked}
        correctAnswers={correctAnswers}
        setCorrectAnswers={setCorrectAnswers}
      />
      <Home
      />      
      <GuessNumber
      />
      <GuessSymbol
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Question from './Components/Question';
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
      <Question 
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
    </div>
  );
}

export default App;

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
  return (
    <div className="container">
      <Header title="The Elements"/>
      <Question 
        elements={elements}  
        currentElement={currentElement}
        setCurrentElement={setCurrentElement}
        inputText={inputText}
        setInputText={setInputText}
      />
    </div>
  );
}

export default App;

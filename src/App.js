import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Question from './Components/Question';
import Answer from './Components/Answer';
import Elements from './DATA';

function App() {
  const elements = Elements;
  const [currentElement, setCurrentElement] = useState('');
  const [inputText, setInputText] = useState("");
  const [message, setMessage] = useState("Peekaboo");
  return (
    <div className="container">
      <Header title="The Elements"/>
      <Question 
        currentElement={currentElement}
        setCurrentElement={setCurrentElement}
        elements={elements}  
      />
      <Answer 
        inputText={inputText}
        setInputText={setInputText}
        currentElement={currentElement}
        message={message}
        setMessage={setMessage}
      />   
    </div>
  );
}

export default App;

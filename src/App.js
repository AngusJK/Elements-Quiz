import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Question from './Components/Question';
import Answer from './Components/Answer';

function App() {
  const elements = [
  { atno: 1, name: 'hydrogen', symbol: 'H' }, 
  { atno: 2, name: 'helium', symbol: 'He' }, 
  { anto: 3, name: 'lithium', symbol: 'Li'},
  { atno: 4, name: 'beryllium', symbol: 'Be' }, 
  { atno: 5, name: 'boron', symbol: 'B'}
  ]
  return (
    <div className="container">
      <Header title="The Elements"/>
      <Question hydrogen={elements[0].symbol}/>
      <Answer />   
      </div>
  );
}

export default App;

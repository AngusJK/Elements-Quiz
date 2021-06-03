//import { useState } from "react";

const question = function({elements, currentQuestion, setCurrentQuestion}) {
  const setNewSymbol = (e) => {
    let num = Math.floor(Math.random() * 5);
    setCurrentQuestion(elements[num].symbol);
    console.log(currentQuestion);
  }
  return (
    <div className="question">
      <button onClick={setNewSymbol}>New symbol</button>
      <p>Name the element with this symbol:</p>
      <h1>{currentQuestion}</h1>
    </div>
  )
}

export default question;
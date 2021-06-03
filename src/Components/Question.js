//import { useState } from "react";

const question = function({elements, currentQuestion, setCurrentQuestion}) {
  const setNewSymbol = (e) => {
    setCurrentQuestion(elements[0].name);
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
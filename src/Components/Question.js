//import { useState } from "react";

const question = function({elements, currentElement, setCurrentElement}) {
  const setNewSymbol = (e) => {
    let num = Math.floor(Math.random() * 10);
    setCurrentElement(elements[num]);
  }
  return (
    <div className="question">
      <button onClick={setNewSymbol}>New symbol</button>
      <p>Name the element with this symbol:</p>
      <div className="stage">
        <h1>{currentElement.symbol}</h1>
      </div>
    </div>
  )
}

export default question;
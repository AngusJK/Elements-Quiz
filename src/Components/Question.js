const question = function({ inputText, setInputText, elements, currentElement, setCurrentElement }) {
  const setNewSymbol = (e) => {
    let num = Math.floor(Math.random() * 30);
    setCurrentElement(elements[num]);
  }
  const submitAnswerHandler = (e) => {
    e.preventDefault();
    console.log(inputText);
    setInputText('');
    setNewSymbol();
  }
  const inputTextHandler = (e) => {
    setInputText(e.target.value.trim().toLowerCase());
  }
  return (
    <div className="question">
      <button onClick={setNewSymbol}>Start Game</button>
      <p>Name the element with this symbol:</p>
      <div className="stage">
        <h1>{currentElement.symbol}</h1>
      </div>
      <form action="" className="answer" onSubmit={submitAnswerHandler}>
        <input onChange={inputTextHandler} type="text" placeholder="type your answer here" />
      </form>
    </div>
  )
}

export default question;
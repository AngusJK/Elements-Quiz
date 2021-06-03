const answer = function({ currentElement, inputText, setInputText}) {
  
  const submitAnswerHandler = (e) => {
    e.preventDefault();
    console.log("Current question is: " + currentElement.name);
    console.log("User answer is: " + inputText);
    setInputText('');
  }
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }
  return(
    <form action="" className="answer">
      <input onChange={inputTextHandler} type="text" placeholder="type your answer here" />
      <button onClick={submitAnswerHandler} type="submit">Submit</button>
    </form>
  )
}

export default answer;
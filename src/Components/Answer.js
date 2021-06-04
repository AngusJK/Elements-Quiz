const answer = function({ currentElement, inputText, setInputText, message, setMessage }) {
  const submitAnswerHandler = (e) => {
    e.preventDefault();
    setMessage("Correct!");
    console.log(message);
    setInputText('');
  }
  const inputTextHandler = (e) => {
    setInputText(e.target.value.trim().toLowerCase());
  }
  return(
    <form action="" className="answer" onSubmit={submitAnswerHandler}>
      <input onChange={inputTextHandler} type="text" placeholder="type your answer here" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default answer;
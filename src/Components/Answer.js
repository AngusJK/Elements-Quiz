const answer = function({ inputText, setInputText}) {
  
  const submitAnswerHandler = (e) => {
    e.preventDefault();
    console.log(inputText);
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
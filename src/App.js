import './App.css';
import Header from './Components/Header';
import Question from './Components/Question';
import Answer from './Components/Answer';

function App() {
  return (
    <div className="container">
      <Header title="The Elements"/>
      <Question />
      <Answer />   
      </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import QuestionsList from "./components/QuestionsList";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [quiz, setQuiz] = useState(null);  

  function generateQuiz() {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((response) => response.json())
      .then((data) => {setQuiz(data)})
      .then(
        ()=>setStartQuiz(true)
      )
      .catch((error) => {
        console.log(error);
      });
      
  }

  return (
    <main className="container">
      {!startQuiz ? (
        <div>
          <h1 className="title">Quizzical</h1>
          <p className="description">The trivia game</p>
          <button className="startQuizBtn" onClick={generateQuiz}>Start quiz</button>
        </div>
      ) : (
        <QuestionsList quiz={quiz}/>
      )}
    </main>
  );
}

export default App;

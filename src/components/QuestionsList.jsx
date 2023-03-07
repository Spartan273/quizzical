import React, { useState } from "react";
import QuestionItem from "./QuestionItem";

export default function QuestionsList(props) {
  const questionsList = props.quiz.results;
  const [questionItems, setQuestionItems] = useState(generateQuestionItem());
  let selectedAnswers = [];

  function selectAnswer(event, answerIndex, questionIndex) {
    if (selectedAnswers.length > 0) {
      for (let i = 0; i < selectedAnswers.length; i++) {
        if (selectedAnswers[i].questionIndex === questionIndex) {
          console.log("Answer already chosen");
          selectedAnswers[i].btn.style.backgroundColor = "#F5F7FB";
          selectedAnswers[i].value = event.target.innerText;
          selectedAnswers[i].answerIndex = answerIndex;
          selectedAnswers[i].btn = event.target;

          event.target.style.backgroundColor = "#D6DBF5";

          return;
        }
      }
      selectedAnswers.push({
        value: event.target.innerText,
        questionIndex: questionIndex,
        answerIndex: answerIndex,
        btn: event.target,
      });
      event.target.style.backgroundColor = "#D6DBF5";
    } else {
      selectedAnswers.push({
        value: event.target.innerText,
        questionIndex: questionIndex,
        answerIndex: answerIndex,
        btn: event.target,
      });
      event.target.style.backgroundColor = "#D6DBF5";
    }

    console.log(selectedAnswers);
    console.log("end function");
  }

  function generateQuestionItem() {
    const question = questionsList.map((question, index) => {
      return (
        <QuestionItem
          key={index}
          index={index}
          question={question}
          selectAnswerFcn={selectAnswer}
        />
      );
    });
    return question;
  }

  return (
    <div className="questionsContainer">
      <ul>{questionItems}</ul>
      <button className="quizBtn">Check answers</button>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

export default function QuestionsList(props) {
  const questionsList = props.quiz.results;
  let isGameFinished = false;
  const [questionItems, setQuestionItems] = useState(generateQuestionItem());
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  let selectedAnswers = [];

  function selectAnswer(event, answerIndex, questionIndex, correctAnswer) {
    if (!isGameFinished) {
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
          correctAnswer: correctAnswer,
          btn: event.target,
        });
        event.target.style.backgroundColor = "#D6DBF5";
      } else {
        selectedAnswers.push({
          value: event.target.innerText,
          questionIndex: questionIndex,
          answerIndex: answerIndex,
          correctAnswer: correctAnswer,
          btn: event.target,
        });
        event.target.style.backgroundColor = "#D6DBF5";
      }
    } else {
      console.log("game is finished, press restart");
    }
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

  function checkAnswers() {
    if (selectedAnswers.length === questionsList.length) {
      selectedAnswers.forEach((answer) => {
        if (answer.value === answer.correctAnswer) {
          answer.btn.style.backgroundColor = "#94D7A2";
        } else {
          const choicesList = answer.btn
            .closest("ul")
            .getElementsByTagName("li");
          for (let i = 0; i < choicesList.length; i++) {
            const button = choicesList[i].getElementsByTagName("button")[0];
            if (button.innerText === answer.correctAnswer) {
              button.style.backgroundColor = "#94D7A2";
            }
          }
          answer.btn.style.backgroundColor = "#F8BCBC";
        }
      });
      isGameFinished = true;
    } else {
      console.log("please select answers for all questions");
    }
  }

  return (
    <div className="questionsContainer">
      <ul>{questionItems}</ul>
      <button className="quizBtn" onClick={checkAnswers}>
        Check answers
      </button>
    </div>
  );
}

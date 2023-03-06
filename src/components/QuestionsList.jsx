import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

export default function QuestionsList(props) {
  const questionsList = props.quiz.results;
  const [questionItems, setQuestionItems] = useState([]);

  useEffect(() => {
    setQuestionItems(
      questionsList.map((question, index) => {
        return <QuestionItem key={index} question={question} />;
      })
    )
  }, [questionsList]);

  return (
    <div className="questionsContainer">
      <ul>{questionItems}</ul>
    </div>
  );
}

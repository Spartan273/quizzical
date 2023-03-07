import he from "he";

export default function QuestionItem(props) {
  const quiz = props.question;
  let choices = [];
  const question = he.decode(quiz.question);

  if (quiz.type === "multiple") {
    choices = quiz.incorrect_answers;
    choices.push(quiz.correct_answer);
  } else {
    choices.push("True", "False");
  }

  return (
    <li key={props.index}>
      <div>
        <h1 className="questionTitle">{question}</h1>
        <ul className="choices">
          {choices.map((choice, index) => {
            return (
              <li key={index}>
                <button
                  onClick={(event) =>
                    props.selectAnswerFcn(event, index, props.index)
                  }
                  className="choicesBtn"
                >
                  {he.decode(choice)}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}

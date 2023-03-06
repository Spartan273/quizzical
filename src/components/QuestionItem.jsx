import React, { useEffect } from 'react'
import he from 'he';

export default function QuestionItem(props) {
    console.log(props.question);
    const quiz = props.question;
    let choices = [];
    const question = he.decode(quiz.question);
    
    if(quiz.type === "multiple"){
        choices = quiz.incorrect_answers;
        choices.push(quiz.correct_answer);      
    }else{
        choices.push("True", "False");
        
    }console.log(choices);
    //console.log("choices", choices);

    
    

  return (
    <li key={props.index}>
        <div>
            <h1 className='questionTitle'>{question}</h1>
            <ul className='choices'>
                {choices.map((choice, index)=>{
                    return <li key={index}><button className='choicesBtn'>{choice}</button></li>
                })}
            </ul>
        </div>
    </li>
  )
}

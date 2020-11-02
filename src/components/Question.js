import React from 'react'
import {shuffle} from "../utils/shuffle"



export default function Question({setAnswer, handleAnswer, data: {question, correct_answer, incorrect_answers}}) {
    const shuffledAnswer = shuffle([correct_answer, ...incorrect_answers])
    const Button = ({answer}) => (
        <button className="btn" onClick={() => setAnswer(answer)} >
            {answer}
        </button>
    )
    return (
        <div>
            <h1>
                {question}
            </h1>
            <div>
                {shuffledAnswer.map(answer => (
                    <Button className="btn" answer={answer}/>
                ))}
            </div>
            <button onClick={()=> handleAnswer()}>Submit Answer</button>
        </div>
    )
}

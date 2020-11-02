import React from 'react'
import {shuffle} from "../utils/shuffle"



export default function Question({setAnswer, handleAnswer, reset, data: {question, correct_answer, incorrect_answers}}) {
    const shuffledAnswer = shuffle([correct_answer, ...incorrect_answers])
    const Button = ({answer}) => (
        <button className="btn" dangerouslySetInnerHTML={{__html: answer}} onClick={() => setAnswer(answer)} />
    )
    return (
        <div>
            <h1 dangerouslySetInnerHTML={{__html: question}}
                />
            <div>
                {shuffledAnswer.map(answer => (
                    <Button className="btn" answer={answer}/>
                ))}
            <button className="btn submitbtn" onClick={()=> handleAnswer()}>Submit Answer</button>
            <button className="btn resetbtn" onClick={()=> reset()}>Reset Quiz</button>
            </div>
        </div>
    )
}

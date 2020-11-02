import React from 'react'
import {shuffle} from "../utils/shuffle"

const Button = ({answer}) => (
    <button>
        {answer}
    </button>
)

export default function Question({handleAnswer, data: {question, correct_answer, incorrect_answers}}) {
    const shuffledAnswer = shuffle([correct_answer, ...incorrect_answers])
    return (
        <div>
            <h2>
                {question}
            </h2>
            <div>
                {shuffledAnswer.map(answer => (
                    <Button onClick={() => answer === correct_answer ? handleAnswer(true): handleAnswer(false)}>{answer}</Button>
                ))}
            </div>

        </div>
    )
}

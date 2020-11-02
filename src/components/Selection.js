import React from 'react'
import { categorykeys } from './Categories'
import QuestionRange from './QuestionRange'
import CategoryButton from './CategoryButton'

export default function Selection({category, numberofQuestions, difficulty, setCategory, setDifficulty, setNumberOfQuestions, makeSelections}) {

    return (
        <div>
            <h1>Welcome to Apex Quizzer</h1>
            <h5>Select a category</h5>
            {categorykeys.map(category => (
                <CategoryButton category={category} setCategory={setCategory}/>
            ))}
            <h5>Choose the number of questions</h5>
            <button className="selectionbtn" onClick={() => setDifficulty("easy")}>
                Easy
            </button>
            <button className="selectionbtn" onClick={() => setDifficulty("medium")}>
                Medium
            </button>
            <button className="selectionbtn" onClick={() => setDifficulty("hard")}>
                Hard
            </button>
            <h5>Choose the number of questions</h5>
            <QuestionRange numberofQuestions={numberofQuestions} setNumberOfQuestions={setNumberOfQuestions} />

            <button className="selectionbtn big" onClick={()=> makeSelections()}>
                Lock in Selections
            </button>
            <br></br>
            <span className="selectiontxt">Make your selections and click the lock in button to start the quiz</span>
        </div>
    )
}

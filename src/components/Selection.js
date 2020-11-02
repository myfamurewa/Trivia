import React, {useState, useEffect} from 'react'
import { categorykeys} from './Categories'
import QuestionRange from './QuestionRange'
import CategoryButton from './CategoryButton'

export default function Selection({category, numberofQuestions, difficulty, setCategory, setDifficulty, setNumberOfQuestions, makeSelections}) {
    
    useEffect(() => {
        console.log("category", category, "number of Questions", numberofQuestions, "difficulty", difficulty)
    }, [category, numberofQuestions, difficulty])
    return (
        <div>
            <h1>Welcome to Apex Quizzer</h1>
            <h5>Select a category</h5>
            {categorykeys.map(category => (
                <CategoryButton category={category} setCategory={setCategory}/>
            ))}
            <h5>Choose the number of questions</h5>
            <button onClick={() => setDifficulty("easy")}>
                Easy
            </button>
            <button onClick={() => setDifficulty("medium")}>
                Medium
            </button>
            <button onClick={() => setDifficulty("hard")}>
                Hard
            </button>
            <h5>Choose the number of questions</h5>
            <QuestionRange numberofQuestions={numberofQuestions} setNumberOfQuestions={setNumberOfQuestions} />

            <button onClick={()=> makeSelections()}>
                Lock in Selections
            </button>
        </div>
    )
}

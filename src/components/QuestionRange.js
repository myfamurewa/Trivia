import React from 'react'

export default function QuestionRange(props) {
    const handleInputChange = e => {
        props.setNumberOfQuestions(e.currentTarget.value)
    }
    return (
        <div>
            <input type="range" name="numberofQuestions" id="numberofQuestions" min="1" max="30" step="1" onInput={handleInputChange}  value="10"/>
            <output >{props.numberofQuestions}</output>
        </div>
    )
}

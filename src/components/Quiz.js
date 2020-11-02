import React, {useState, useEffect}from 'react'
import axios from "axios"
import {connect} from 'react-redux'
import {categories} from './Categories'
import {addAndShuffle} from '../utils/shuffle'
function Quiz(props) {
    const [questions, setQuestions] = useState([])
    const [iterator, setIterator] = useState(0)
    const [answer, setAnswer] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState(null)
    console.log(props.difficulty, props.number, props.category)
    
  useEffect(() => {
        axios.get(`https://opentdb.com/api.php?amount=${props.number}${props.category !== ""? `&category=${categories[props.category]}`:""}`)
        .then(res => {
            console.log(res)
            setQuestions(res.data.results)
        }).catch(err => {
            console.log(err)
        }
        )
    }, [])
    useEffect( () => {
        addAndShuffle(questions[iterator].correct_answer)
    }, [iterator])
    return (
        <div className='container'>
            {questions.length > 0  ? questions[iterator].type === "multiple" ? (<div><div>
                {questions[iterator].question}
            </div>
            <div>
               {questions[iterator].wrong_answers.map(answer => (
                   <div onClick={() => setAnswer(answer)}>{answer}</div>
               ))} 
            </div></div>) : <div>
               <div>{questions[iterator].question}</div>
               <div onClick={() => setAnswer(true)}>true</div>
               <div onClick={() => setAnswer(true)}>false</div>
            </div>: <span>Loading questions</span> }
        </div>
    )
}



const mapStateToProps = state => {
    return {
        difficulty: state.difficulty,
        number: state.numberofQuestions,
        category: state.category
    }
}

export default connect(mapStateToProps)(Quiz);

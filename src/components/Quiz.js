import React, { useState} from "react";
import axios from "axios";
import { categories } from "./Categories";
import Question from "./Question"
import Loader from 'react-loader-spinner'
import Selection from "./Selection";
function Quiz(props) {
  const [questions, setQuestions] = useState([]);
  const [iterator, setIterator] = useState(0);
  const [category, setCategory] = useState("");
  const [numberofQuestions, setNumberOfQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState("medium");
  const [answer, setAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(false)
  const makeSelections = () => {
    console.log("selections made")
    setLoading(true)
    axios
      .get(
        `https://opentdb.com/api.php?amount=${numberofQuestions}${
          category !== "" ? `&category=${categories[category]}` : ""
        }&type=multiple`
      )
      .then((res) => {
        setLoading(false)
        console.log("results", res)
        setQuestions(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const reset = () => {
    setQuestions([])
    setScore(0)
    setIterator(0)
  }

  const handleAnswer = () => {
      console.log("handle answer called", iterator, answer)
      if (answer === questions[iterator].correct_answer){
          setScore(score + 1)
      }
      setIterator(iterator + 1)
  }
  return (
    <>{iterator >= questions.length && questions.length > 0 ?(<h1>
        Thanks for playing<br></br>
        You got {score}/ {iterator} questions correct
    </h1>) :(      <div className="container">
        {questions.length > 0 ? (
          <Question data={questions[iterator]} setAnswer={setAnswer} handleAnswer={handleAnswer} reset={reset}/>
        ) : (
          <>
            <Selection
              category={category}
              setCategory={setCategory}
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              numberofQuestions={numberofQuestions}
              setNumberOfQuestions={setNumberOfQuestions}
              makeSelections={makeSelections}
            />
          </>
        )}
      </div>)}
    </>
  );
}

export default Quiz;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { categories } from "./Categories";
import Question from "./Question"
import Selection from "./Selection";
function Quiz(props) {
  const [questions, setQuestions] = useState([]);
  const [iterator, setIterator] = useState(0);
  const [category, setCategory] = useState("");
  const [numberofQuestions, setNumberOfQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState("medium");
  const [score, setScore] = useState(0)
  const makeSelections = () => {
    console.log("selections made")
    axios
      .get(
        `https://opentdb.com/api.php?amount=${numberofQuestions}${
          category !== "" ? `&category=${categories[category]}` : ""
        }&type=multiple`
      )
      .then((res) => {
        console.log("results", res)
        setQuestions(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAnswer = (answer) => {
      setIterator(iterator + 1)
      if (answer === true){
          setScore(score + 1)
      }
  }
  return (
    <>{iterator >= questions.length && questions.length > 0 ?(<div>
        Thanks for playing<br></br>
        You got {score}/ {iterator + 1} questions correct
    </div>) :(      <div className="container">
        {console.log(category)}
        {questions.length > 0 ? (
          <Question data={questions[iterator]} handleAnswer={handleAnswer}/>
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
            <span>Loading questions</span>{" "}
          </>
        )}
      </div>)}
    </>
  );
}

export default Quiz;

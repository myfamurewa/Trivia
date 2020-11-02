export function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
export const addAndShuffle = (correctAnswer) => {
    if (questions[iterator].type === "multiple"){
    questions[iterator].incorrect_answers.push(correctAnswer)
    questions[iterator].incorrect_answers = shuffle(questions[iterator].incorrect_answers)
    } else {
        return
    }
}
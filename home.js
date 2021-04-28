let question = document.getElementById("question")

let userAnswer = document.getElementById("userAnswer")

let submitUserAnswerButton = document.getElementById("submitUserAnswerButton")

let resultParagraph = document.getElementById("resultParagraph")

let showNextQuestionButton = document.getElementById("showNextQuestionButton")

submitUserAnswerButton.addEventListener("click", submitUserAnswer)

let questionCounter = 1
let correctAnswers = 0

//tied to submit button
function submitUserAnswer() {

  submitUserAnswerButton.style.display = "none"
  showNextQuestionButton.style.display = "block"

  if (questionCounter == 1) {
    if (userAnswer.value == "getElementById") {
      correctAnswers++
      resultParagraph.innerHTML = "correct!"
      return
    } 
    resultParagraph.innerHTML = "Incorrect. The method is called: getElementById."
  }

  if (questionCounter == 2) {
    if (userAnswer.value == "addEventListener") {
      correctAnswers++
      resultParagraph.innerHTML = "correct!"
      return
    } 
    resultParagraph.innerHTML = "Incorrect. The method is called: addEventListener"
  }

  if (questionCounter == 3) {
    if (userAnswer.value == "innerHTML") {
      correctAnswers++
      resultParagraph.innerHTML = "correct!"
      return
    } 
    resultParagraph.innerHTML = "Incorrect. The method is called: innerHTML."
  }

  if (questionCounter == 4) {
    if (userAnswer.value == "value") {
      correctAnswers++
      resultParagraph.innerHTML = "correct!"
      return
    } 
    resultParagraph.innerHTML = "Incorrect. The property is called: value."
  }

  if (questionCounter == 5) {
    if (userAnswer.value == "style") {
      correctAnswers++
      resultParagraph.innerHTML = "correct!"
      return
    } 
    resultParagraph.innerHTML = "Incorrect. The property is called: style."
    showNextQuestionButton.innerHTML = "Show Results"
  }
}

//tied to next question button
function showNextQuestion() {
  
  questionCounter++
  resultParagraph.innerHTML = ""
  userAnswer.value = ""
  showNextQuestionButton.style.display = "none"
  submitUserAnswerButton.style.display = "block"

  if (questionCounter == 2) {
    question.innerHTML = "In JavaScript, what is the method name for making an element listen for an event?"
    return
  }

  if (questionCounter == 3) {
    question.innerHTML = "In JavaScript, what is the property name for setting the HTML inside of an element?"
    return
  }

  if (questionCounter == 4) {
    question.innerHTML = "In JavaScript, what is the property name for getting what the user input?"
    return
  }

  if (questionCounter == 5) {
    question.innerHTML = "In JavaScript, what is the property name for setting the style of a CSS element?"
    return
  }

  if (questionCounter == 6) {

    question.style.display = "none"
    userAnswer.style.display = "none"
    submitUserAnswerButton.style.display = "none"
    //TODO: calculate the percentage correctly.
    resultParagraph.innerHTML = `You answered ${correctAnswers} out of 5 questions correctly. Your score is ${correctAnswers / 5}%.`
    return
}

}
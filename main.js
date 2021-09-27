import questions from "./questions.js";
const questionForm = document.querySelector(".quiz-form")
const buttonSubmit = document.querySelector(".btn-submit")
const scoreTextElement = document.querySelector(".score")


function createQuestionList() {

    for (let index = 0; index < questions.length; index++) {

        const element = questions[index];

        var questionContainer = document.createElement("div")
        questionContainer.className = "question-container"
        // Create Html element for questions
        var questionElement = document.createElement("p")
        questionElement.innerHTML = element.question
        // Create Html element for option
        var optionLabel_one = document.createElement("label")
        var optionLabel_two = document.createElement("label")
        var optionLabel_three = document.createElement("label")

        //creating radio button for option
        var optionRadioElement_one = document.createElement("input")
        var optionRadioElement_two = document.createElement("input")
        var optionRadioElement_three = document.createElement("input")

        optionRadioElement_one.type = "radio"
        optionRadioElement_two.type = "radio"
        optionRadioElement_three.type = "radio"

        optionRadioElement_one.name = "question" + index
        optionRadioElement_two.name = "question" + index
        optionRadioElement_three.name = "question" + index

        optionRadioElement_one.value = element.option1
        optionRadioElement_two.value = element.option2
        optionRadioElement_three.value = element.option3


        optionLabel_one.appendChild(optionRadioElement_one)
        optionLabel_two.appendChild(optionRadioElement_two)
        optionLabel_three.appendChild(optionRadioElement_three)

        optionLabel_one.appendChild(document.createTextNode(element.option1))
        optionLabel_two.appendChild(document.createTextNode(element.option2))
        optionLabel_three.appendChild(document.createTextNode(element.option3))

        questionContainer.appendChild(questionElement)
        questionContainer.appendChild(optionLabel_one)
        questionContainer.appendChild(optionLabel_two)
        questionContainer.appendChild(optionLabel_three)
        questionForm.appendChild(questionContainer)
    }
}

function checkAnswer() {
    let score = 0;
    for (let index = 0; index < questions.length; index++) {
        const element = questions[index];
        var inputName = "question" + index;
        const optionInput = document.getElementsByName(inputName)
        for (let index = 0; index < optionInput.length; index++) {
            const input = optionInput[index];
            if (input.checked && input.value === element.answer) {
                score++
            }
        }

    }
    scoreTextElement.innerHTML = `Your score is ${score}`
}

buttonSubmit.addEventListener('click', () => checkAnswer())

createQuestionList()
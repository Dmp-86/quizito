const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What element does O represent on the periodic table?',
        choice1: 'Helium',
        choice2: 'Oxygen',
        choice3: 'Cobalt',
        choice4: 'Osmium',
        answer: 2,
    },
    {
        question: 'Proverbially, what is rubbed into the wound to make things worse?',
        choice1: 'Salt',
        choice2: 'Vinegar',
        choice3: 'Ketchup',
        choice4: 'Mustard',
        answer: 1,
    },
    {
        question: 'In fairy tales, which item is used to transport people through the air?',
        choice1: 'Magic mattress',
        choice2: 'Magic blanket',
        choice3: 'Magic blanket',
        choice4: 'Magic carpet',
        answer: 4,
    },
    {
        question: 'Which of these is a popular type of biscuit?',
        choice1: 'Ingestive',
        choice2: 'Suggestive',
        choice3: 'Digestive',
        choice4: 'Festive',
        answer: 3,
    },
    {
        question: ' A goatee is a small type of what?',
        choice1: 'Fork',
        choice2: 'Goat',
        choice3: 'Beard',
        choice4: 'Cucumber',
        answer: 3,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }


questionCounter++
progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question

choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
})

availableQuestions.splice(questionsIndex,1)

acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
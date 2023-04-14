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
        question: 'What element does 'O' represent on the periodic table?',
        choice1: 'Helium',
        choice2: 'Oxygen',
        choice3: 'Cobalt',
        choice4: 'Osmium',
        answer: 2,
    },
    {
        question: 'What element does 'O' represent on the periodic table?',
        choice1: 'Helium',
        choice2: 'Oxygen',
        choice3: 'Cobalt',
        choice4: 'Osmium',
        answer: 2,
    },
    {
        question: 'What element does 'O' represent on the periodic table?',
        choice1: 'Helium',
        choice2: 'Oxygen',
        choice3: 'Cobalt',
        choice4: 'Osmium',
        answer: 2,
    },
    {
        question: 'What element does 'O' represent on the periodic table?',
        choice1: 'Helium',
        choice2: 'Oxygen',
        choice3: 'Cobalt',
        choice4: 'Osmium',
        answer: 2,
    },
    {
        question: 'What element does 'O' represent on the periodic table?',
        choice1: 'Helium',
        choice2: 'Oxygen',
        choice3: 'Cobalt',
        choice4: 'Osmium',
        answer: 2,
    },
]
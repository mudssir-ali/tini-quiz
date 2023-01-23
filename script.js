const quizData = [
    {
        question: "What current plant species do you have in your backyard?",
        a: "6",
        b: "7",
        c: "34",
        d: "500",
       
    },
    {
        question: "What is your plant size?",
        a: "6",
        b: "9",
        c: "9",
        d: "8",
        
    },
    {
        question: "What is the total area of your garden/yard?",
        a: "4",
        b: "5",
        c: "55",
        d: "33",
        
    },
    {
        question: "What pre-existing planting arrangements do you have?",
        a: "33",
        b: "33",
        c: "33",
        d: "33",
        
    },
    {
        question: "What is the area measurement of each type of existing planting?",
        a: "3edgdgd",
        b: "dfghdfghddgdrfgd",
        c: "rgrdg",
        d: "grdg",
        
    },
    {
        question: "Have you ever used compost or mulch?",
        a: "fgdrgd",
        b: "dfgdfhdf",
        c: "fdghdfh",
        d: "dfgsdgdhr",
        
    },
    {
        question: "Do you have any tilling's on the flower beds?",
        a: "hgtfshtft",
        b: "fhtfhtrh",
        c: "dfgdhsdfh",
        d: "fhsstfhsr",
        
    },
    {
        question: "Is there any irrigation in drier places within your backyard?",
        a: "fghdfhtfhfghtf",
        b: "dfghhdfhtr",
        c: "thtrfh",
        d: "fghtfhftsh",
        
    },
    {
        question: "",
        a: "dfgdfhdfs",
        b: "ffghtfhtffthr",
        c: "fhtfhtrf",
        d: "fghsdfghtf",
        
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        
    },
    {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        
    },





];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Thank you for Your Answer</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
const quizData = [
    {
        question: 'What is my age?',
        a: '10',
        b: '12',
        c: '23',
        d: '19',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'
    }, {
        question: 'What is my favourite pet?',
        a: 'Dog',
        b: 'Cat',
        c: 'snake',
        d: 'Cow',
        correct: 'a'
    }, {
        question: 'Who is Indias PM?',
        a: 'Godi',
        b: 'Lodi',
        c: 'Sodi',
        d: 'Modi',
        correct: 'd'
    }, {
        question: 'WHere I live?',
        a: 'Gkp',
        b: 'Lko',
        c: 'NDLS',
        d: 'CHD',
        correct: 'a'
    }
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}


function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
       answerEls.forEach((answerEl) => {
        answerEl.checked = false; 
        });

    
}


 
submitBtn.addEventListener('click', () => {
    //check to see the answer    
    const answer = getSelected();

    // console.log(answer );
        if(answer)  {
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
            currentQuiz++;

            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                // //TODO:- Show Results 
                // alert("you have finished! Get yourself an orange lemonade");

                quiz.innerHTML = `<h2> You Answered correctly at ${score}/${quizData.length} Questions.</h2> <button onclick="location.reload()">Reload</button>` ;
            }
        }
    
    
});
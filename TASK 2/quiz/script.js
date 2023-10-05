const quizDB=[
    {
        question:"Inside which HTML element do we put the javascript",
        choice1:"<script>",
        choice2:"<javascript>",
        choice3:"<js>",
        choice4:"<script.js>",
        answer: "ans4"

    },
    {
        question:"CSS",
        choice1:"<script>",
        choice2:"styling",
        choice3:"<js>",
        choice4:"<script.js>",
        answer: "ans2"

    },
    {
        question:"HTML",
        choice1:"<script>",
        choice2:"<javascript>",
        choice3:"hyper text markup language",
        choice4:"<script.js>",
        answer: "ans3"

    },
{
    question:"Python",
        choice1:"language",
        choice2:"<javascript>",
        choice3:"<js>",
        choice4:"<script.js>",
        answer: "ans1"
}];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;


const loadQuestion = () =>{
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.choice1;
    option2.innerText = questionList.choice2;
    option3.innerText = questionList.choice3;
    option4.innerText = questionList.choice4;
    

    
}
loadQuestion();

const getcheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    });
    return answer;


};
const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkdAnswer = getcheckAnswer();
    console.log(checkdAnswer);

    if(checkdAnswer == quizDB[questionCount].answer){
        score++;
    };


    deselectAll();


    questionCount++;

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showscore.innerHTML = 
        `<h3> You scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play again </button>`;

        showscore.classList.remove('scorearea');

    }
});
var questions = [{
    question: "How much script can javaScript script if javaScript could script script?",
    answerOne: "So much Script!",
    answerTwo: "Not so much Script...",
    answerThree: "Too much javaScript",
    answerFour: "Script for days"
},
{
    question: "There is an online course. One enters it blind and comes out coding in javaScript. What is it?",
    answerOne: "This bootcamp.",
    answerTwo: "Some other bootcamp.",
    answerThree: "Fun.",
    answerFour: "Snorms."
},
{
    question: "What has three feet but can't walk or something?",
    answerOne: "Some dumb riddle.",
    answerTwo: "To get to the other side.",
    answerThree: "The sphynx or something?",
    answerFour: "Blorps."
}];

//var questionIdCounter = 0;

var mainEl = document.querySelector("#main");//where all the action happens

var startPage = document.createElement("section");
startPage.className = "start-page";

var startButton = document.createElement("button");
startButton.setAttribute("type","button");
startButton.setAttribute("id","startbtn");
startButton.className = "btn";
startButton.innerHTML = "Start Quiz";

startPage.innerHTML = "<h1>Coding Quiz Challenge</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestias culpa placeat necessitatibus, voluptatem error, blanditiis eaque corporis voluptatum odit quisquam ex. Deleniti, eum nam nobis magnam provident itaque molestiae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis autem culpa provident amet. Modi totam quis aspernatur facilis vitae, voluptatum facere cum nulla, dignissimos possimus animi illo eveniet explicabo aut!</p>";

var i = 0;

    var loadStartPage = function() {
        mainEl.appendChild(startPage);
        startPage.appendChild(startButton);
    }
    
    var takeQuiz = function() {
        
        if (i < questions.length) {
        //replace child of MainEl with quizQuestion as populated by questions[i]
        //mainEl.removeChild(startPage);

        var quizQuestion = document.createElement("section");
        quizQuestion.className = "live-quiz";
        quizQuestionContainer = document.createElement("ul");
        quizQuestionContainer.className = "question-container";
        debugger;
        quizQuestion.innerHTML = "<h1>" + questions[i].question + "</h1>";
        quizQuestionContainer.innerHTML = "<li><button class='answer-choice' type='button' id='inc1'>1. " + questions[i].answerOne + "</button></li><li><button class='answer-choice' type='button' id='inc2'>2. " + questions[i].answerTwo + "</button></li><li><button class='answer-choice' type='button' id='cor'>3. " + questions[i].answerThree + "</button></li><li><button class='answer-choice' type='button' id='inc3'>4. " + questions[i].answerFour + "</button></li>";
        
        quizQuestion.appendChild(quizQuestionContainer);

        mainEl.innerHTML = "";
        mainEl.appendChild(quizQuestion);

        i++;

        var ans1 = document.getElementById('inc1');
        var ans2 = document.getElementById('inc2');
        var ans3 = document.getElementById('cor');
        var ans4 = document.getElementById('inc3');
        console.log(ans1,ans2,ans3,ans4);

        ans1.onclick = function() {takeQuiz()};
        ans2.onclick = function() {takeQuiz()};
        ans3.onclick = function() {takeQuiz()};
        ans4.onclick = function() {takeQuiz()};
        }
        
    }


    //var endQuiz = function() {...}

document.addEventListener("load",loadStartPage());

startButton.onclick = function() {takeQuiz()};

//answerBtn.onclick = function() {takeQuiz()};

//document.getElementsByClassName('answer-choice').addEventListener("click",takeQuiz());
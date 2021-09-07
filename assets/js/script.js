//var questionIdCounter = 0;

var mainEl = document.querySelector("#main");

var startPage = document.createElement("section");
startPage.className = "start-page";

var startButton = document.createElement("button");
startButton.setAttribute("type","button");
startButton.setAttribute("id","startbtn");
startButton.className = "btn";
startButton.innerHTML = "Start Quiz";

startPage.innerHTML = "<h1>Coding Quiz Challenge</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestias culpa placeat necessitatibus, voluptatem error, blanditiis eaque corporis voluptatum odit quisquam ex. Deleniti, eum nam nobis magnam provident itaque molestiae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis autem culpa provident amet. Modi totam quis aspernatur facilis vitae, voluptatum facere cum nulla, dignissimos possimus animi illo eveniet explicabo aut!</p>";

var loadStartPage = function() {
    mainEl.appendChild(startPage);
    startPage.appendChild(startButton);
}

var startQuiz = function() {
var quizQuestion = document.createElement("section");
quizQuestion.className = "live-quiz";
quizQuestionContainer = document.createElement("ul");
quizQuestionContainer.className = "question-container";

for (var i = 0; i < questions.length; i++) {
    quizQuestion.innerHTML = "<h1>" + questions[i].question + "</h1>";
    
    quizQuestionContainer.innerHTML = "<li><button class='answer-choice' type='button'>1. " + questions[i].answerOne + "</button></li><li><button class='answer-choice' type='button'>2. " + questions[i].answerTwo + "</button></li><li><button class='answer-choice' type='button'>3. " + questions[i].answerThree + "</button></li><li><button class='answer-choice' type='button'>3. " + questions[i].answerFour + "</button></li>";

    //debugger;
    quizQuestion.appendChild(quizQuestionContainer);
    if (document.querySelector(".start-page") === startPage) {
        mainEl.replaceChild(quizQuestion,startPage);
    }
    else if (document.querySelector(".start-page" === !startPage)) {
        mainEl.replaceChild(quizQuestion,quizQuestion);
    }
}

//quizQuestion.appendChild(quizQuestionContainer);
//mainEl.replaceChild(quizQuestion,startPage); //This will probably only work for the first question, you need a variable for the child of mainEl to reference here, this will involve some re-factoring - I don't think this will address your issue with why the start-quiz jumps to the last question in the array, think more on it anyway, but this is still an important thing to fix. The for-loop should replace whatever the child of ``main'' is with the first question in the array, then the next. As the code stands, the function cannot replace the last question with the next question, because it's looking for the startpage object, which would have been replaced. Still, why does it jump to the last object? I think that this has something to do with the for loop itself - the former problem doesn't arise until you reach the replace method later. So something about the for-loop is automatically cycling through all the elements until you get to the last one. Maybe the answer is in the modules. Maybe not. 

//mainEl = document.querySelector("#main");
//mainEl.removeChild(startPage);
//mainEl.appendChild(elmnt);
//quizQuestion.appendChild(quizQuestionContainer);
//mainEl.replaceChild(quizQuestion,startPage);
}

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
}];

document.addEventListener("load",loadStartPage());

startButton.onclick = function() {startQuiz()};

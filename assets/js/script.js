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
var elmnt = document.createElement("section");
elmnt.innerHTML = "<h1>It worked!</h1>";
elmnt.setAttribute("id","testing");

mainEl = document.querySelector("#main");
//mainEl.removeChild(startPage);
//mainEl.appendChild(elmnt);
mainEl.replaceChild(elmnt,startPage);
}

document.addEventListener("load",loadStartPage());

startButton.onclick = function() {startQuiz()};

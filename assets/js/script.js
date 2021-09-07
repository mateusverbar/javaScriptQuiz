var loadStartPage = function() {
    var startPage = document.createElement("section");
    startPage.className = "start-page";

    var startButton = document.createElement("button");
    startButton.setAttribute("type","button");
    startButton.className = "btn";
    startButton.innerHTML = "Start Quiz";

    startPage.innerHTML = "<h1>Coding Quiz Challenge</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestias culpa placeat necessitatibus, voluptatem error, blanditiis eaque corporis voluptatum odit quisquam ex. Deleniti, eum nam nobis magnam provident itaque molestiae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis autem culpa provident amet. Modi totam quis aspernatur facilis vitae, voluptatum facere cum nulla, dignissimos possimus animi illo eveniet explicabo aut!</p>";

    mainEl.appendChild(startPage);
    startPage.appendChild(startButton);
    
}

var mainEl = document.querySelector("#main");
document.addEventListener("load",loadStartPage());


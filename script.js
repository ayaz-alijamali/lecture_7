// ____________ DOM _________

// div ko ham yahan se b style kar sakty hen 

let div = document.querySelector("div");
div.style.backgroundColor = "green";
div.style.fontSize = "20px";
div.innerText = "Hello !";


// create a Botton => ham yahan se b botton bana sakty hen ur us ko style b k sakty hen!
let newBtn = document.createElement("button");
div.before(newBtn);
newBtn.innerText = "Click me";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
newBtn.style.margin = "15px";


// create a heading => ham yahan h1 heading b bana sakty hen => ur b sab kuch kr sakty hen!
let newHeading = document.createElement("h1");
newHeading.innerHTML = " <i> Hi, i am new coder</i>";
document.querySelector("body").prepend(newHeading);



// paragraph ko add kar k new class diya!
let para = document.querySelector("p");
para.classList.add("newClass");
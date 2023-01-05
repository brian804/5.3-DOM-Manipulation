let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
const h1 = document.querySelector("#main-title")
h1.innerText = "Welcome to my homepage"

    // Part 2
const body = document.querySelector("body")
body.style.backgroundColor = "lightblue"
  
    // Part 3
const lastLi = document.querySelector("li:last-child")
lastLi.remove()
  
    // Part 4
const special = document.querySelectorAll(".special-title")
for(let i of special){
    i.style.fontSize = "2rem"
}

    // Part 5
const races = document.querySelector("#past-races")
if (races.hasChildNodes()) {
    races.removeChild(races.children[3])
}
  
    // Part 6
const pastRace = document.querySelector("#past-races")
const li = document.createElement("li")
li.innerHTML = "North Carolina"
pastRace.appendChild(li)
  
    // Part 7
const main = document.querySelector("main")
const newDiv = document.createElement("div")
newDiv.setAttribute("class", "blog-post blue")
main.append(newDiv)

const head = document.createElement("h1")
head.appendChild(document.createTextNode("North Carolina"))
newDiv.appendChild(para)

    // Part 8
    const quoteTitle = document.querySelector("#quote-title");
    quoteTitle.addEventListener("click", function () {
      randomQuote();

    // Part 9
    let blog = document.querySelectorAll('.blog-post');
    for(let i of blog){
      i.addEventListener('mouseout',function (){
        i.classList.toggle('purple');
        i.classList.toggle('red');
      })
      i.addEventListener('mouseenter',function (){
        i.classList.toggle('purple');
        i.classList.toggle('red');
      })
    }
  
})
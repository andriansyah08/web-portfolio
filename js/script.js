const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

// Menghilangkan sidebar ketika klik sembarang

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Random Quotes
const mainQuote = document.querySelector(".main-quote");
const btnQuote = document.querySelector(".btn-quote");
const author = document.querySelector(".name-author");
const speech = document.querySelector(".speech");
const copy = document.querySelector(".copy");

function randomQuote() {
  btnQuote.classList.add = ".loading";
  btnQuote.innerText = "Loading..";
  //API Random
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      mainQuote.innerText = result.content;
      author.innerText = result.author;
      btnQuote.innerText = "New Quote";
      btnQuote.classList.remove = ".loading";
    });
}
btnQuote.addEventListener("click", randomQuote);

//Text to Speech
speech.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(`${mainQuote.innerText} by ${author.innerText}`);
  speechSynthesis.speak(utterance);
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(mainQuote.innerText);
});

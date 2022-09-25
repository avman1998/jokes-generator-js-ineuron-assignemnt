let joke_string = "";
fetch("https://official-joke-api.appspot.com/random_joke")
  .then((res) => res.json())
  .then((data) => {
    joke_string = `${data.setup} ${data.punchline}`;
  });

const jokeEle = document.querySelector(".container #joke");
const jokebtn = document.querySelector(".container #jokeBtn");
jokebtn.addEventListener("click", function () {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((data) => {
      joke_string = `${data.setup} 
      ${data.punchline}`;
    });
  jokeEle.innerHTML = joke_string;
});

const joke_container = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


let getJoke =() =>{
    joke_container.classList.remove("fade");
    fetch(url) 
    .then(data => data.json())
    

    .then(item => {
        
        joke_container.textContent = `${item.joke}`;
        joke_container.classList.add("fade");
    });
}

btn.addEventListener("click",getJoke);
getJoke();

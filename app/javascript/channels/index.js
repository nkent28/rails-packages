// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

// const element = document.querySelector(CSS_SELECTOR);
const button = document.querySelector("#click-me");

// button.addEventListener(EVENT_TYPE, CALLBACK)
button.addEventListener('click', (event) => {
  document.body.style.backgroundColor = "blue";
});

// calling an api
const results = document.querySelector('#results');

const searchMovies = (keyword) => {
const apiUrl = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`; //keyword is a search param
fetch(apiUrl) //request the api
  .then(response => response.json()) //parsed the json
  .then((data) => {
    // console.log(data);
    data.Search.forEach((movie) => { //iterated over the array of movies and created strings
      const newMovie = `<li>
      <img src="${movie.Poster}" />
      <p>${movie.Title}</p>
      </li>`
      results.insertAdjacentHTML('beforeend', newMovie) //data.Search is the key to call, the api is limiting the results to 10
    // inserted each movie to the list, to the end of the list
    });
  });
};

  const searchForm = document.querySelector('#search-movies')
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      results.innerHTML = ""; //gets rid of all the listed items so is all new information
      const keyword = document.querySelector('#keyword').value;
      //console.log(keywordInput);
      searchMovies(keyword);
    });

    searchMovies("Wonder Woman");




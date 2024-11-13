import { createMoviesCarousel } from "../../src/components/carousel";
import { searchMovie } from "../../src/api/getMovies";

document.addEventListener("DOMContentLoaded", async () => {
   await putSearchResults(query);
});

const gridResults = document.getElementById("movies-results-container");

document.getElementById("search-movie-form").addEventListener("submit", async (event) => {
    event.preventDefault();
   // console.log("submit");
    const movieName = document.getElementById("search-movie-input").value;
    console.log(movieName);
    await putSearchResults(movieName);
  });

  async function putSearchResults(movieName) {
    let searchResults = await createMoviesCarousel(searchMovie, "search", movieName);
   // console.log(searchResults);
     gridResults.innerHTML = searchResults;
     document.getElementById('loading-screen').style.display = 'none';
   // console.log(searchResults);
  }

  function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Recupera o valor do parâmetro "query"
const query = getQueryParameter('query');
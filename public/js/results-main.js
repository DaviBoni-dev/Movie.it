import { createMoviesCarousel } from "../../src/components/carousel.js";
import { searchMovie } from "../../src/api/getMovies.js";
import getQueryParameter from "../../src/utils/url.js";

//let movieName = "";
document.addEventListener("DOMContentLoaded", async () => {
    let movieName = getQueryParameter("query");
    //if (movieName) {
    //    await putSearchResults(movieName);
    //}
    putSearchResults(movieName);
});

const gridResults = document.getElementById("movies-results-container");
const titleResults = document.getElementById("results-title");

  async function putSearchResults(movieName) {
    let searchResults = await createMoviesCarousel(searchMovie, "search", movieName);
     gridResults.innerHTML = searchResults;
     titleResults.innerHTML = `Resultados para: ${movieName} `;
     document.getElementById('loading-screen').style.display = 'none';
}

import { getTopRatedMovies } from "../../src/api/getMovies.js";
import { createMoviesCarousel } from "../../src/components/carousel.js";

document.addEventListener("DOMContentLoaded", async () => {
    const movieContaiener = document.getElementById("top-rated-container");
    let result = await createMoviesCarousel(getTopRatedMovies, "top-rated");
    movieContaiener.innerHTML = result;
    const loadingPage = document.getElementById("loading-screen");
    loadingPage.style.display = "none";
});
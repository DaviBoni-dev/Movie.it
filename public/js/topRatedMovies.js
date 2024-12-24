import { getTopRatedMovies } from "../../src/api/getMovies.js";
import { createMoviesCarousel } from "../../src/components/carousel.js";

let page = 0;

document.addEventListener("DOMContentLoaded", async () => {
    page += 1;
    const movieContaiener = document.getElementById("top-rated-container");
    let result = await createMoviesCarousel(getTopRatedMovies, "top-rated", page);
    movieContaiener.innerHTML = result;
    const loadingPage = document.getElementById("loading-screen");
    loadingPage.style.display = "none";
});

window.onload = async () => {
    document.getElementById("loading-screen").style.display = "none";
};

async function updatePage() {
    page++;
    const movieContaiener = document.getElementById("top-rated-container");
    let result = await createMoviesCarousel(getTopRatedMovies, "top-rated", page);
    movieContaiener.innerHTML += result;
}

const buttonLoadMore = document.getElementById("toprated-loadmore-button");

buttonLoadMore.addEventListener("click", updatePage);


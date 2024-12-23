import getQueryParameter from "../../src/utils/url.js";
import {createMoviesCarousel, createMoviesCarouselWithArray} from "../../src/components/carousel.js";
import {getMoviesByGender} from "../../src/api/getMovies.js";


const gridResults = document.getElementById("movies-results-container");
const titleResults = document.getElementById("results-title");
const loadingScreen = document.getElementById('loading-screen');
const loadmoreButton = document.getElementById('gender-loadmore-button');
let moviesArray = [];
let page = 1;
const gender = getQueryParameter('gender');

document.addEventListener("DOMContentLoaded", async () => {
    titleResults.innerHTML = `Popular ${gender} Movies`;
    moviesArray = await getMoviesByGender(gender, page);
    const carousel = await createMoviesCarouselWithArray(moviesArray, gender);
    gridResults.innerHTML = carousel;
    loadingScreen.style.display = 'none';
});

loadmoreButton.addEventListener('click', async () => {
    page++;
    moviesArray = await getMoviesByGender(gender, page);
    const carousel = await createMoviesCarouselWithArray(moviesArray, gender);
    gridResults.innerHTML += carousel;
});
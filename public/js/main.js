import { createMoviesCarousel } from "../../src/components/carousel.js";
import {
  getPopularMovies,
  getTrendingMovies,
} from "../../src/api/getMovies.js";

const carouselPopularEl = document.getElementById("carousel-popular");
const moviesPopularContainer = await createMoviesCarousel(
  getPopularMovies,
  "popular"
);
carouselPopularEl.innerHTML = moviesPopularContainer;

const carouselTrendingEl = document.getElementById("carousel-trending");
const moviesTrendingContainer = await createMoviesCarousel(
  getTrendingMovies,
  "trending"
);
carouselTrendingEl.innerHTML = moviesTrendingContainer;

const prevPopularButton = document.getElementById("prev-popular");
const nextPopularButton = document.getElementById("next-popular");

// Define a quantidade de pixels que o carrossel deve rolar a cada clique
const scrollAmount = 591;

// Rola para a esquerda quando a seta "prev" é clicada
prevPopularButton.addEventListener("click", () => {
  carouselPopularEl.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

// Rola para a direita quando a seta "next" é clicada
nextPopularButton.addEventListener("click", () => {
  carouselPopularEl.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

const prevTrendingButton = document.getElementById("prev-trending");
const nextTrendingButton = document.getElementById("next-trending");

prevTrendingButton.addEventListener("click", () => {
  carouselTrendingEl.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

// Rola para a direita quando a seta "next" é clicada
nextTrendingButton.addEventListener("click", () => {
  carouselTrendingEl.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

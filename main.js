import key from "./key.js";
import { createPopularMoviesCarousel } from "./popularMovies.js";

console.log("Página atualizada");

const carouselEl = document.getElementById("carousel");
const moviesContainer = await carousel();
carouselEl.innerHTML = moviesContainer;

async function carousel() {
  const result = await createPopularMoviesCarousel();
  console.log(result);
  return result;
}
carousel;

async function nowPlayingMovies() {
  try {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=pt-BR&region=BR&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log("data: ", data.results.length);
    const result = data.results;
    return result;
  } catch (error) {
    throw error;
  }
}

// nowPlayingMovies();

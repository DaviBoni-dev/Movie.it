import key from "../components/key.js";

async function getPopularMovies() {
  try {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&region=BR&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log("data: ", data.results);
    const result = data.results;
    return result;
  } catch (error) {
    throw error;
  }
}

getPopularMovies();

export async function createPopularMoviesCarousel() {
  const moviesArray = await getPopularMovies();
  //   console.log(moviesArray);
  let carouselHTML = "";
  for (let i = 0; i < 10; i++) {
    carouselHTML += /*html*/ `<div class ="movie-frame" id="movie-frame-${moviesArray[i].id}">
    <img
      src="https://image.tmdb.org/t/p/original${moviesArray[i].poster_path}"
      alt="Poster ${i}"
    />

  </div>`;
  }
  return carouselHTML;
}
// createPopularMoviesCarousel();
/*
 <div class="movie-frame">
            <img
              src="https://image.tmdb.org/t/p/original/ejObq9iPdY1RTlNr5yzRU9B9Mga.jpg"
              alt="Poster 1"
            />
          </div>
          <div class="movie-frame">
            <img
              src="https://image.tmdb.org/t/p/original/ejObq9iPdY1RTlNr5yzRU9B9Mga.jpg"
              alt="Poster 1"
            />
          </div>
          <div class="movie-frame">
            <img
              src="https://image.tmdb.org/t/p/original/ejObq9iPdY1RTlNr5yzRU9B9Mga.jpg"
              alt="Poster 1"
            />
          </div>
          <div class="movie-frame">
            <img
              src="https://image.tmdb.org/t/p/original/ejObq9iPdY1RTlNr5yzRU9B9Mga.jpg"
              alt="Poster 1"
            />
          </div>
          <div class="movie-frame">
            <img
              src="https://image.tmdb.org/t/p/original/ejObq9iPdY1RTlNr5yzRU9B9Mga.jpg"
              alt="Poster 1"
            />
          </div>
          <div class="movie-frame">
            <img
              src="https://image.tmdb.org/t/p/original/ejObq9iPdY1RTlNr5yzRU9B9Mga.jpg"
              alt="Poster 1"
            />
          </div>
          <div class="movie-frame">
            <img
              src="https://image.tmdb.org/t/p/original/ejObq9iPdY1RTlNr5yzRU9B9Mga.jpg"
              alt="Poster 1"
            />
          </div>
          */

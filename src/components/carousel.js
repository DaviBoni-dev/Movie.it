export async function createMoviesCarousel(func, type, trendingtype = null) {
  const moviesArray = await func(trendingtype);
  let carouselHTML = "";

  if(moviesArray.length == 0){
      carouselHTML = `<h2> Nehum filme encontrado </h2>`;
      return carouselHTML;
      }
  for (let i = 0; i < moviesArray.length; i++) {
    if(moviesArray[i].poster_path == null || moviesArray[i].poster_path == undefined){
     continue;
    }
    carouselHTML += /*html*/ `<div class ="movie-frame" id="movie-frame-${type}">
    <p class="rating-box-filme">${ajustarNota(moviesArray[i])}</p>
    <img
      src="${adjustPoster(moviesArray[i].poster_path)}"
      alt="Poster ${i}"
    />
    <p class="paragrafo-box-filme" title="${moviesArray[i].title}">${
      moviesArray[i].title
    }</p>

  </div>`;
  }
  return carouselHTML;
};

export async function createMoviesCarouselWithArray(moviesArray, type){
  let carouselHTML = "";

  if(moviesArray.length == 0){
      carouselHTML = `<h2> Nehum filme encontrado </h2>`;
      return carouselHTML;
      }
  for (let i = 0; i < moviesArray.length; i++) {
    if(moviesArray[i].poster_path == null || moviesArray[i].poster_path == undefined){
     continue;
    }
    carouselHTML += /*html*/ `<div class ="movie-frame" id="movie-frame-${type}">
    <p class="rating-box-filme">${ajustarNota(moviesArray[i])}</p>
    <img
      src="${adjustPoster(moviesArray[i].poster_path)}"
      alt="Poster ${i}"
    />
    <p class="paragrafo-box-filme" title="${moviesArray[i].title}">${
      moviesArray[i].title
    }</p>

  </div>`;
  }
  return carouselHTML;
}


function ajustarNota(movie) {
  if (movie.vote_average > 0) {
    return Number(movie.vote_average).toFixed(1);
  }
  return "NA";
}

function adjustPoster(moviePoster) {
  return `https://image.tmdb.org/t/p/original${moviePoster}`;
}

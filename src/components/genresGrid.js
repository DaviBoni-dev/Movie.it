import { getGenresId, getMoviesByGender } from "../api/getMovies.js";

export async function createGridGenres() {
    const genreArray = await getGenresId();
    let gridHTML = "";
    let oneMovie = {};
    for(let i = 0; i < genreArray.length; i++){
        let movieGenreArray = await getMoviesByGender(genreArray[i].name);
        for(let j = 0; j < movieGenreArray.length; j++){
            if(!(movieGenreArray[j].backdrop_path == null || movieGenreArray[j].backdrop_path == undefined)){
                oneMovie = movieGenreArray[j];
                break;
            }
        }
        gridHTML += /*html*/ `<div class="genre-box" id="${genreArray[i].name}" style="background-image: url(https://image.tmdb.org/t/p/original/${oneMovie.backdrop_path});">
            <h2 class="genres-text">${genreArray[i].name}</h2>
        </div>`
    }

    return gridHTML;
}

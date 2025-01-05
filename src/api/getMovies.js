import key from "../components/key.js";

export async function getPopularMovies() {
  try {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en&region=BR&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log("data: ", data);
    let result = data.results;
    result = adjustArray(result);
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getTrendingMovies(timeWindow) {
  try {
    let url = `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${key}&language=en&region=BR&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    //console.log("data: ", data.results[0]);
    //adjustArray(data);
    let result = data.results;
    result = adjustArray(result);
    // console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

export async function searchMovie(movieName) {
  try {
    const safeMovieName = encodeURIComponent(movieName);
    console.log("safeMovieName: ", safeMovieName);
    let url = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&query=${safeMovieName}&page=1&include_adult=false`;
    const response = await fetch(url);
    const data = await response.json();
    let result = data.results;
    result = adjustArray(result);
   console.log("data: ", data);
    return result;
  } catch (error) {
    throw error;
  }
}


function adjustArray(moviesArray) {
  for (let i = 0; i < moviesArray.length; i++) {
    if (Number(moviesArray[i].vote_average) == 0) {
      moviesArray[i].vote_average = "NA";
      // console.log("igual");
    }
  }

  if(moviesArray[0].known_for != undefined){
    console.log("moviesArray tem um ator");
    //moviesArray = moviesArray[0].known_for;
    moviesArray = moviesArray[0].known_for.concat(moviesArray);
  }

  return moviesArray;
}

export async function getGenresId(){
  try {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.genres;
    //console.log("Get genres ok");
    return results;
  } catch (error) {
    throw error;
  }
}

async function findIdByGenres(genre){
  const genres = await getGenresId();
  const genreObject = genres.find(genreArray => genreArray.name === genre);
  if (genreObject) {
    //console.log("id: ", genreObject.id);
    return genreObject.id;
  } else {
    console.log("Genre not found");
    return null;
  }
}

export async function getMoviesByGender(genre, page = 1){
  try{
  const genreId = await findIdByGenres(genre);
  //console.log("genreId: ", genreId);
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${genreId}&page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  let result = data.results;
  result = adjustArray(result);
  //console.log("data: ", result);
  return result;
  } catch (error) {
    throw error;
  }
}

export async function getTopRatedMovies(page){
  try{
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    let result = data.results;
    result = adjustArray(result);
    //console.log("data: ", result);
    return result;
  }
  catch(error){
    throw error;
  }
}

export async function getUpcomingMovies(page = 1){
  try{
    let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&page=${page}&region=BR&language=pt-BR`;
    const response = await fetch(url);
    const data = await response.json();
    let result = data.results;
    result = adjustArray(result);
    //console.log("data: ", result);
    return result;
  }
  catch(error){
    throw error;
  }
}

export async function getWatchProviderId(watchProvider){
  try{
    let url = `https://api.themoviedb.org/3/watch/providers/movie?api_key=${key}&watch_region=BR`;
    const response = await fetch(url);
    const data = await response.json();
    let result = data.results;
    //console.log("data: ", result);
    result.sort((a, b) => a.display_priority - b.display_priority);
   
    result.forEach(provider => {
      if(provider.provider_name === watchProvider){
        console.log("id: ", provider.provider_id);
        return provider.provider_id;
      }
    });
    
  }
  catch(error){
    throw error;
  }
}

export async function getOneIdByGenre(genre){
  let result = await getGenresId();
  console.log(result);
  for(const arrayGenre of result){
    if(arrayGenre.name == genre){
      return arrayGenre.id;
    }
  }
}
import key from "../../src/components/key.js";
import { getWatchProviderId, getOneIdByGenre, getMoviesByQuery } from "../../src/api/getMovies.js";
import { createMoviesCarousel } from "../../src/components/carousel.js";

const order = document.getElementById('order');

const genres = document.querySelectorAll('input[name="genero"]');
const watchProviders = document.querySelectorAll('input[name="watch"]');
let genresSelectedArray = [];
let watchProvidersArray = [];
let idsGenre = [];

const orderValue = order.value;
const sortOrder = document.querySelector('input[name="ordertype"]:checked').value;

const sectionGrid = document.getElementById('genres-grid');

document.addEventListener('DOMContentLoaded', async function() {
    let query = createFindQuery(watchProvidersArray, sortOrder, orderValue, genresSelectedArray);
    
    let moviesCarrousel = await createMoviesCarousel(getMoviesByQuery, 'discover', query);
    sectionGrid.innerHTML = moviesCarrousel;
    
});



genres.forEach(genre => { genre.addEventListener('change', async function() {
    if(genre.checked) {
        genresSelectedArray.push(genre.value);
    } else {
        const index = genresSelectedArray.indexOf(genre.value);
        genresSelectedArray.splice(index, 1);
    }


    createFindQuery(watchProvidersArray, sortOrder, orderValue, genresSelectedArray);

})});

watchProviders.forEach(provider => { provider.addEventListener('change', function() {
    if(provider.checked) {
        watchProvidersArray.push(provider.value);
    } else {
        const index = watchProvidersArray.indexOf(provider.value);
        watchProvidersArray.splice(index, 1);
    }

    console.log(watchProvidersArray);
})});




// async function createFindQuery(watchProvidersArray, sortOrder, orderValue, genresSelectedArray) {
//      let query = `'https://api.themoviedb.org/3/discover/movie?`;
//      query += `api_key=${key}&region=BR&`;
//      //console.log(watchProvidersArray);
//      //let queryGenre = await createGenreQuery(genresSelectedArray);
//      let queryOrder = `sort_by=${orderValue}.${sortOrder}`;
//      //if(genresSelectedArray.length != 0)
//      //query += queryGenre;

//      query += queryOrder;

//      return query;
     
// }

function createFindQuery(watchProvidersArray, sortOrder, orderValue, genresSelectedArray) {
    const baseURL = 'https://api.themoviedb.org/3/discover/movie';
    const apiKey = `${key}`;
    const region = 'BR';
    const sortBy = encodeURIComponent(orderValue + '.' + sortOrder);

   // const genres = genresSelectedArray.join(',');
    //const watchProviders = watchProvidersArray.join('|');

    return `${baseURL}?api_key=${apiKey}&region=${region}&sort_by=${sortBy}`
   // &with_genres=${genres}&with_watch_providers=${watchProviders}`;
}


async function createWatchProvidersQuery(watchProvidersArray){
    let query = "";
    let idsArray = [];
    console.log(watchProvidersArray);
    for (const provider of watchProvidersArray) {
        let id = await getWatchProviderId(provider);
        console.log(id);
        idsArray.push(id);
    }

console.log(idsArray);
    query = idsArray.join("|");
    console.log(query);
    return query;
}

async function createGenreQuery(genreArray){
    let idsGenre = [];
    console.log(genreArray);
    for(const genre of genreArray){
        let id = await getOneIdByGenre(genre);
        console.log(id);
        idsGenre.push(id);
    }

    let queryGenre = idsGenre.join('|');
    let query = `with_genres=${queryGenre}`;
    query = encodeURI(query);
    return query;

}
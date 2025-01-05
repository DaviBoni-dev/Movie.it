import key from "../../src/components/key.js";
import { getWatchProviderId, getOneIdByGenre } from "../../src/api/getMovies.js";

const button = document.getElementById('button-findmovie');
const selectGenre = document.getElementById('genero');
const order = document.getElementById('order');
const errorContainer = document.getElementById('error-container');
const form = document.getElementById('movieForm');

const genres = document.querySelectorAll('input[name="genero"]');
const watchProviders = document.querySelectorAll('input[name="watch"]');
let genresSelectedArray = [];
let watchProvidersArray = [];
let idsGenre = [];

const orderValue = order.value;
const sortOrder = document.querySelector('input[name="ordertype"]:checked').value;

async function createGenreQuery(genreArray){
    let idsGenre = [];
    console.log(genreArray)
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

genres.forEach(genre => { genre.addEventListener('change', async function() {
    if(genre.checked) {
        genresSelectedArray.push(genre.value);
    } else {
        const index = genresSelectedArray.indexOf(genre.value);
        genresSelectedArray.splice(index, 1);
    }

    //console.log(genresSelectedArray);
    //idsGenre = await createGenreQuery(genresSelectedArray);
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


// document.addEventListener('DOMContentLoaded', function() {
//     const errorContainer = document.getElementById('error-container');

//     form.addEventListener('submit', function(event) {

//         event.preventDefault();
//         const orderValue = order.value;
//         const sortOrder = document.querySelector('input[name="ordertype"]:checked').value;
//         //console.log(watchProvidersArray);
//         //console.log(sortOrder);
//         //console.log(orderValue);
//         //console.log(genresSelectedArray);
//         const query = createFindQuery(watchProvidersArray, sortOrder, orderValue, genresSelectedArray);
//         //console.log(query);
//     });
// });

async function createFindQuery(watchProvidersArray, sortOrder, orderValue, genresSelectedArray) {
     let query = `'https://api.themoviedb.org/3/discover/movie?`;
     query += `api_key=${key}&region=BR&`;
     //console.log(watchProvidersArray);
     let queryGenre = await createGenreQuery(genresSelectedArray);
     query += queryGenre;
     console.log(query);
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


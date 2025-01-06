import key from "../../src/components/key.js";
import { getWatchProviderId, getOneIdByGenre, getMoviesByQuery } from "../../src/api/getMovies.js";
import { createMoviesCarouselWithArray } from "../../src/components/carousel.js";

const order = document.getElementById('order');
const loadmore_button = document.getElementById('find-loadmore-button');

const genres = document.querySelectorAll('input[name="genero"]');
const watchProviders = document.querySelectorAll('input[name="watch"]');
let genresSelectedArray = [];
let watchProvidersArray = [];
let idsGenre = [];

let page = 1;

let orderValue = order.value;
let sortOrder = document.querySelector('input[name="ordertype"]:checked').value;

const sectionGrid = document.getElementById('genres-grid');

const radioButtons = document.querySelectorAll('input[name="ordertype"]');

    // Adicione um ouvinte de eventos para cada botão de rádio
    radioButtons.forEach(radio => {
        radio.addEventListener('change', async function(event) {
            if (event.target.checked) {
                updateMovies();
            }
        });
    });

order.addEventListener('change', async function() {
    updateMovies();
})

loadmore_button.addEventListener('click', async function() {
    page++;
    updateMovies(false);
});


document.addEventListener('DOMContentLoaded', async function() {
    updateMovies();    
});



genres.forEach(genre => { genre.addEventListener('change', async function() {
    if(genre.checked) {
        genresSelectedArray.push(genre.value);
    } else {
        const index = genresSelectedArray.indexOf(genre.value);
        genresSelectedArray.splice(index, 1);
    }
     updateMovies();

})});

watchProviders.forEach(provider => { provider.addEventListener('change', function() {
    if(provider.checked) {
        watchProvidersArray.push(provider.value);
    } else {
        const index = watchProvidersArray.indexOf(provider.value);
        watchProvidersArray.splice(index, 1);
    }

    //console.log(watchProvidersArray);
    //createWatchProvidersQuery(watchProvidersArray);
    updateMovies();
})});


async function createFindQuery(watchProvidersArray, sortOrder, orderValue, genresSelectedArray, page = 1) {
    const baseURL = 'https://api.themoviedb.org/3/discover/movie';
    const apiKey = `${key}`;
    const region = 'BR';
    const pages = `${page}`;
    const voteCountGreaterThan = 500; 
    const sortBy = encodeURIComponent(orderValue + '.' + sortOrder);
    let query = `${baseURL}?api_key=${apiKey}&region=${region}&sort_by=${sortBy}&page=${pages}`;

    if(genresSelectedArray.length > 0){
        let genreQuery = await createGenreQuery(genresSelectedArray);
        query += `${genreQuery}`;
    }
    if(orderValue === 'vote_average'){
        query += `&vote_count.gte=${voteCountGreaterThan}`;
    }
    if(watchProvidersArray.length > 0){
        let watchProvidersQuery = await createWatchProvidersQuery(watchProvidersArray);
        query += `${watchProvidersQuery}&watch_region=${region}`;
    }

    return query;
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
    let queryWatch = idsArray.join("|");
    queryWatch = encodeURI(queryWatch);
    query = `&with_watch_providers=${queryWatch}`;
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
    let query = `&with_genres=${queryGenre}`;
    query = encodeURI(query);
    return query;
}

async function updateMovies(creating = true){
    let vote = false;
    console.log(`creating ${creating}`);
    orderValue = order.value;
    if(orderValue === 'vote_average'){
        vote = true;
    }
    sortOrder = document.querySelector('input[name="ordertype"]:checked').value;
    
    let query = await createFindQuery(watchProvidersArray, sortOrder, orderValue, genresSelectedArray, page);
    let moviesArray = await getMoviesByQuery(query, vote);
    let moviesCarrousel = await createMoviesCarouselWithArray(moviesArray, 'discover');
    if(creating){
        sectionGrid.innerHTML = moviesCarrousel;
    } else {
        sectionGrid.innerHTML += moviesCarrousel;

    }
    console.log(moviesArray);
}
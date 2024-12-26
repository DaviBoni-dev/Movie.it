import getQueryParameter from "../../src/utils/url.js";

const button = document.getElementById('button-findmovie');
const selectGenre = document.getElementById('genero');
const order = document.getElementById('order');


button.addEventListener('click', async (event) => {
    event.preventDefault();
    const genre = selectGenre.value;
    const orderValue = order.value;
    const sortOrder = document.querySelector('input[name="order"]:checked').value;
    const watchProviders = Array.from(document.querySelectorAll('input[name="watch"]:checked')).map(checkbox => checkbox.value);
    console.log(watchProviders);
    console.log(sortOrder);
    console.log(orderValue);
    console.log(genre);

});
// Seleciona o botão e o menu
const menuToggle = document.getElementById('menu-toggle');
const headerRight = document.getElementById('header-right');
const headerLeft = document.getElementById('header-left');
const headerList = document.getElementById('header-list');

let isClose = true;
// Alterna a classe 'open' ao clicar no botão
menuToggle.addEventListener('click', () => {
if(isClose){
  headerRight.style.display = "none";
  headerLeft.style.display = "none";
  headerList.style.display = "flex";
  headerList.classList.add('open')
  isClose = false;
} else {
  headerRight.style.display = "flex";
  headerLeft.style.display = "flex";
  headerList.style.display = "none";
  headerList.classList.remove('open')
  isClose = true;
}
  // console.log("cliquei");
  // headerRight.classList.toggle('open');
});

window.addEventListener('beforeunload', function() {
    // Show loading screen when navigating to a new page
    document.getElementById('loading-screen').style.display = 'flex';
    document.getElementById('main-content').style.display = 'none';
});

window.addEventListener('load', function() {
    // Hide loading screen and show content once everything is loaded
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
});
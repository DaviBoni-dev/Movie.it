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


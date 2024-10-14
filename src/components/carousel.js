const carousel = document.getElementById("carousel");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Define a quantidade de pixels que o carrossel deve rolar a cada clique
const scrollAmount = 514;

// Rola para a esquerda quando a seta "prev" é clicada
prevButton.addEventListener("click", () => {
  carousel.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

// Rola para a direita quando a seta "next" é clicada
nextButton.addEventListener("click", () => {
  carousel.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

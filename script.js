// Script para alternar o carrossel de imagens
let index = 0;

function showNextImages() {
    let carousel = document.querySelector(".carousel");
    let totalImages = document.querySelectorAll(".carousel img").length;
    let imagesPerView = 3;
    let totalSets = totalImages / imagesPerView;
    
    index = (index + 1) % totalSets;
    let offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Alterna as imagens a cada 3 segundos
setInterval(showNextImages, 3000);

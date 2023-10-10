// array delle immagini del carosello
const images = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
];

// seleziona l'elemento carousel
const carouselSlide = document.querySelector('.carousel-slide');
const prevButton = document.querySelector('prevButton');
const nextButton = document.querySelector('nextButton');

let currentIndex = 0;
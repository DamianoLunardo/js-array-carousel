// Array delle immagini del carosello
const images = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
];

// Seleziona gli elementi del carosello ed i pulsanti di navigazione
const carouselSlide = document.querySelector('.carousel-slide');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');


// Inizializza l'indice
let currentIndex = 0;

// Ora devo mostrare l'immagine corrente. L'indice viene moltiplicato per -100% per determinare quanto spostare l'elemento.
function showSlide(index) {
    //bonus 1 scorrimento continuo immagini
    currentIndex = (index + images.length) % images.length;
    carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
};

// Funzioni per la gestione dei pulsanti. modifiche per scorrimento continuo
prevButton.addEventListener('click', () => {
 currentIndex--;
showSlide(currentIndex);   
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});

//prevButton.addEventListener('click', () => {
   // if (currentIndex > 0) {
      //  currentIndex--;
      //  showSlide(currentIndex);
      //  updateButtons();
   // }
//});

//nextButton.addEventListener('click', () => {
   // if (currentIndex < images.length - 1) {
      //  currentIndex++;
       // showSlide(currentIndex);
        //updateButtons();
   // }
//});

// Inizializza l'array delle immagini
for (let i = 0; i < images.length; i++) {
    const img = document.createElement ('img');
    img.src = images [i];
    img.alt = `Image ${i + 1}`;
    img.className = i === currentIndex ? 'visible' : 'hidden';
    carouselSlide.appendChild(img);
};

showSlide(currentIndex);





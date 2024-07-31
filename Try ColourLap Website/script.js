let currentIndex = 0;

function showNextImage() {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalImages = document.querySelectorAll('.carousel-item').length;

    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * 1185; 

    carouselInner.style.transform = `translateX(${offset}px)`;
}

setInterval(showNextImage, 3000); 



  document.addEventListener('DOMContentLoaded', (event) => {

    const tryColorlabButton = document.querySelector('.try-colorlab');
    const tryColourlapButton = document.querySelector('.try-colourlap');

    
    tryColorlabButton.addEventListener('click', () => {
     
      window.location.href = 'login.html';
    });

    
    tryColourlapButton.addEventListener('click', () => {
      
      window.location.href = 'login.html';
    });
  });


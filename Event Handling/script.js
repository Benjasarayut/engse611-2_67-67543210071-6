const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumb');


thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
  });
});
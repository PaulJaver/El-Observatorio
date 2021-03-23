import movies from '/js/movies-db.js';

/* Index */
let moviesList = document.getElementById("slider-item");

for (let i = 0; i < 5; i++) {
  moviesList.innerHTML += `<div class="col">

    <a href="detalle.html?movie=${movies[i].title}">

    <img src="${movies[i].poster_img}" alt="" class="slide">

    </a> 
</div>`;
}
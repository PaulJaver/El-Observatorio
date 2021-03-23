/* import movies from '/js/movies-db.js'; */

let movies = JSON.parse(localStorage.getItem("listaItemKey"));

/* Index */
let moviesList = document.getElementById("slider-item");

for (let i = 0; i < movies.length; i++) {
  moviesList.innerHTML += `<div class="col">

    <a href="detalle.html?movie=${movies[i].nombre}">

    <img src="${movies[i].imagen}" alt="" class="slide">

    </a> 
</div>`;
}

/* import movies from '/js/movies-db.js'; */

let movies = JSON.parse(localStorage.getItem("listaItemKey"));

const queryString  = window.location.search;
const urlParams = new URLSearchParams(queryString);

let pelicula = {};

for(let i = 0; i < movies.length; i++) {

    if(movies[i].nombre === urlParams.get('movie')) {
        pelicula = movies[i];
    }

}


/* Detalle Pelicula */
const movieDetailContainer = (document.getElementById(
    "movie_detail_container"
  ).style.backgroundImage = `url(${pelicula.bg_img})`);
  
  const movieTitleImg = (document.getElementById("movie_title_img").src =
    pelicula.title_img);
  
  const movieDescription = (document.getElementById(
    "movie_description"
  ).innerHTML = pelicula.descripcion);
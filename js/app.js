let listaItem = [];
leerInventario();
// const containerSlider = document.getElementById('inner-carousel');

function leerInventario() {
  if (localStorage.length > 0) {
    // traer datos del localstorage
    listaItem = JSON.parse(localStorage.getItem("listaItemKey"));
    // traer el padre
    let articlePadre = document.getElementById("sliderPeliculas");
    // borrar el contenido del padre
    articlePadre.innerHTML = "";
    // crear mis columnas
    // crear las columnas
    for (let i in listaItem) {
      let imagen = "";
      if (listaItem[i].imagen === "") {
        // agregar una imagen por defecto
        imagen = "";
      } else {
        // mostrar la imagen que cargue en el objeto
        imagen = listaItem[i].imagen;
      }
      // variable que almacene el html de la columna
      let slider = `
            <div class="col">
                <a href="detalle.html"><img src="img/${listaItem[i].imagen}" alt="${listaItem[i].imagen}" class="slide"></a> 
              </div>`;

      articlePadre.innerHTML += slider;
    }
  }
}

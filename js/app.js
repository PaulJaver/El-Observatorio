let destacada = [];
let listaItem = [];
// leerDestacada();
leerInventario();







function leerInventario(){
    if(localStorage.length > 0){
        // traer datos del localstorage
        listaItem = JSON.parse(localStorage.getItem('listaItemKey'));
        // traer el padre
        let articlePadre = document.getElementById('sliderPeliculas');
        // borrar el contenido del padre
        articlePadre.innerHTML='';
        // crear mis columnas
        // crear las columnas
        for(let i in listaItem){
            let imagen='';
            if(listaItem[i].imagen === ""){
                // agregar una imagen por defecto
                imagen = '';
            }else{
                // mostrar la imagen que cargue en el objeto
                imagen = listaItem[i].imagen
            }
            // variable que almacene el html de la columna
            let slider = `
            <div class="col">
                <a href="detalle.html"><img src="img/${listaItem[i].imagen}" alt="${listaItem[i].imagen}" class="slide"></a> 
              </div>`
        articlePadre.innerHTML += slider;
        }
    }
  }

 function leerDestacada(){
      if(localStorage.length > 0){
          // traer datos del localstorage
          destacada = JSON.parse(localStorage.getItem('destacadaKey'));
          // traer el padre
          let contenedorDes = document.getElementById('destacadoSlider');
          // borrar el contenido del padre
          contenedorDes.innerHTML='';
          // crear mis columnas
          // crear las columnas
          for(let i in destacada){
              let imagen='';
              if(destacada[i].imagen === ""){
                  // agregar una imagen por defecto
                  imagen = '';
              }else{
                  // mostrar la imagen que cargue en el objeto
                  imagen = destacada[i].imagen
              }
              // variable que almacene el html de la columna
              let carousel = `
              <img src="img/${destacada[i].imagen}" alt="${destacada[i].imagen}"
              class="w-100 d-block banner">
            <div class="carousel-caption d-none d-md-block">
              <h5 id="titulo">${destacada[i].nombre}</h5>
              <p id="descripcion">${destacada[i].descripcion}</p>
              <a href="404.html" class="btn btn-outline-info" type="button">Ver ahora</a>
            </div>`
            contenedorDes.innerHTML += carousel;
          }
      }}


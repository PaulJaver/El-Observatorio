let listaItem = [];
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
            
            
          //   let columna = `<div class="col-md-3">
          //   <div class="card mb-4">
          //     <img
          //       src="img/productos/${imagen}"
          //       class="card-img-top"
          //       alt="${listaFunkopop[i].nombre} Funkopop"
          //     />
          //     <div class="card-body">
          //       <h5 class="card-title">${listaFunkopop[i].nombre}</h5>
          //       <p class="card-text">
          //       ${listaFunkopop[i].descripcion}
          //       </p>
          //       <a href="error404.html" class="btn btn-info disabled">Mas detalles</a>
          //     </div>
          //   </div>
          // </div>`;
        //   agregar la columna a su elemento padre
        articlePadre.innerHTML += slider;
        }
    }

}

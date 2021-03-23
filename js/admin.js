import { Contenido } from './class.js'

let listaItem = [];
const modalAgregar = new bootstrap.Modal(document.getElementById('modalAgregar'));
//modificarItem = false => AGREGA
//modificarItem = true => MODIFICA
let modificarItem = false;
//destacar = true => marca
//destaca = false => desmarca
let destacar = true

let btnAgrgar = document.getElementById('btnAgregar');
btnAgrgar.addEventListener('click', function () {
  limpiarForm();
  modalAgregar.show();
})

leerDatos();


//Create
window.agregarItem = function () {

  let codigo = document.getElementById('codigo').value;
  let nombre = document.getElementById('nombre').value;
  let categoria = document.getElementById('categoria').value;
  let descripcion = document.getElementById('descripcion').value;
  let imagen = document.getElementById('imagen').value;

  let nuevoItem = new Contenido(codigo, nombre, categoria, descripcion, imagen);

  listaItem.push(nuevoItem);
  console.log(listaItem);

  localStorage.setItem('listaItemKey', JSON.stringify(listaItem));

  limpiarForm();

  Swal.fire(
    'Realizado!',
    'El item fue agregado correctamente',
    'success'
  )
  leerDatos();
  modalAgregar.hide();
}

function limpiarForm() {
  document.getElementById('formItem').reset();
  modificarItem = false;
}
//Read
function leerDatos() {
  if (localStorage.length > 0) {
    let _listaItem = JSON.parse(localStorage.getItem('listaItemKey'));

    if (listaItem.length === 0) {
      listaItem = _listaItem
    }
    dibujarTabla(_listaItem)
  }
}

function dibujarTabla(listaContenido) {
  console.log(listaContenido);

  let tCuerpo = document.getElementById('tablaItem')
  let filaItem = '';
  tCuerpo.innerHTML = '';

  for (let i in listaContenido) {
    filaItem = `
    <tr>
    <th scope="row">${listaContenido[i].codigo}</th>
    <td>${listaContenido[i].nombre}</td>
    <td>${listaContenido[i].categoria}</td>
    <td>${listaContenido[i].descripcion}</td>
    <td>${listaContenido[i].imagen}</td>
    <td>
      <button class="btn" onclick='prepararItem(this)' id='${listaContenido[i].codigo}'><i class="far fa-edit color1"></i></button>
      <button class="btn" onclick="eliminarItem(this)" 
      id="${listaContenido[i].codigo}"><i class="far fa-trash-alt color1"></i></button>
    </td>
    <td>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault"t</label>
     </div>
    </td>
    <td id='destacarPadre'>
      <button class="btn" onclick="destacarItem(this)" 
      id="${listaContenido[i].codigo}"><i class="far fa-star color1" id='destacar'></i></button>
     </td>
   </tr>`

   tCuerpo.innerHTML += filaItem;
  }
}

window.eliminarItem = function(boton){
  // console.log(boton.id);
  Swal.fire({
    title: '¿Estas seguro de eliminar este item?',
    text: "Una vez borrado no se podrá recuperar!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {

      let itemsFiltrados = listaItem.filter(function(producto){
        return producto.codigo != boton.id;
      })
console.log(itemsFiltrados);
      localStorage.setItem('listaItemKey', JSON.stringify(itemsFiltrados));

      listaItem = itemsFiltrados;

      leerDatos();

      Swal.fire(
          'Borrado!',
          'El item seleccionado fue borrado',
          'success'
        )
    }
  })
}

window.prepararItem = function (boton){
   console.log(boton.id);

   let itemEncontrado = listaItem.find(function(producto){
     return producto.codigo === boton.id;
   })
   console.log(itemEncontrado);
document.getElementById('codigo').value = itemEncontrado.codigo;
document.getElementById('nombre').value = itemEncontrado.nombre;
document.getElementById('categoria').value = itemEncontrado.categoria;
document.getElementById('descripcion').value = itemEncontrado.descripcion;
document.getElementById('imagen').value = itemEncontrado.imagen;

modificarItem = true;

modalAgregar.show();
}

window.guardarItem = function (event){
    event.preventDefault();
    console.log('cual ejecutar');
    
    if(modificarItem){
      editarItemExistente();

    }else{
      agregarItem();
    }
}

function editarItemExistente() {
  console.log('desde la funcion editar');
  //validar

  let codigo = document.getElementById('codigo').value;
  let nombre = document.getElementById('nombre').value;
  let categoria = document.getElementById('categoria').value;
  let descripcion = document.getElementById('descripcion').value;
  let imagen = document.getElementById('imagen').value;

  limpiarForm();

  for (let i in listaItem){
  if(listaItem[i].codigo === codigo){
    listaItem[i].nombre = nombre;
    listaItem[i].categoria = categoria;
    listaItem[i].descripcion = descripcion;
    listaItem[i].imagen = imagen;
    }
  }

  localStorage.setItem('listaItemKey', JSON.stringify(listaItem));

  leerDatos();

  Swal.fire(
    'Realizado!',
    'El item fue modificado correctamente',
    'success'
  )
 
  modalAgregar.hide();

}

// window.destacarItem = function(boton){

//   let itemDestacado = listaItem.find(function(producto){
//     return producto.codigo === boton.id;
//   });
//   destacar = true
//   if(destacar = true){
//   document.getElementById('destacar').className = 'fas fa-star color8';
// }else{
//   document.getElementById('destacar').className = 'far fa-star color1';
// }
// }





























let listaItem = [];
leerInventario();
// const containerSlider = document.getElementById('inner-carousel');







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

document.getElementById("btn__registrarse").addEventListener("click", register);
document
  .getElementById("btn__iniciar-sesion")
  .addEventListener("click", iniciarSesion);
window.addEventListener("resize", widthPage);

let loginRegister = document.querySelector(".formulario__login-register");
let formulario_login = document.querySelector(".formulario__login");
let formulario_register = document.querySelector(".formulario__register");
let loginTrasero = document.querySelector(".formulario__trasero-login");
let registerTrasero = document.querySelector(".formulario__trasero-register");

function widthPage() {
  if (window.innerWidth > 850) {
    loginTrasero.style.display = "block";
    registerTrasero.style.display = "block";
  } else {
    registerTrasero.style.display = "block";
    registerTrasero.style.opacity = "1";
    loginTrasero.style.display = "none";
    formulario_login.style.display = "block";
    formulario_register.style.display = "none";
    loginRegister.style.left = "0px";
  }
}
widthPage();

function iniciarSesion() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "none";
    loginRegister.style.left = "10px";
    formulario_login.style.display = "block";
    registerTrasero.style.opacity = "1";
    loginTrasero.style.opacity = "0";
  } else {
    formulario_register.style.display = "none";
    loginRegister.style.left = "0px";
    formulario_login.style.display = "block";
    registerTrasero.style.display = "block";
    loginTrasero.style.display = "none";
  }
}

function register() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "block";
    loginRegister.style.left = "410px";
    formulario_login.style.display = "none";
    registerTrasero.style.opacity = "0";
    loginTrasero.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    loginRegister.style.left = "0";
    formulario_login.style.display = "none";
    registerTrasero.style.display = "none";
    loginTrasero.style.display = "block";
    loginTrasero.style.opacity = "1";
  }
}}

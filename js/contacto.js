const input_usuario = document.getElementById("input_usuario");
const input_email = document.getElementById("input_email");
const input_consulta = document.getElementById("input_consulta");

const btn_enviar = document
  .getElementById("btn_enviar")
  .addEventListener("click", () => {
    if (
      input_usuario.value !== "" &&
      input_email.value !== "" &&
      input_consulta.value !== ""
    ) {

      let arrayConsultas = [];

      if (localStorage.getItem("listaConsultas")) {
        arrayConsultas = JSON.parse(localStorage.getItem("listaConsultas"));
      }

      let consulta = {
        usuario: input_usuario.value,
        email: input_email.value,
        consulta: input_consulta.value,
      };

      arrayConsultas.push(consulta);

      localStorage.setItem("listaConsultas", JSON.stringify(arrayConsultas));
    }
  });

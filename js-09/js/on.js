// const input = document.getElementById("nombre");
const input = document.querySelector("#nombre");

input.onfocus = function () {
  console.log("Click en el input");
};

input.onblur = function () {
  console.log("Click fuera del input");
};

// function enviarFormulario(event) {
//   event.preventDefault();
//   console.log("No se envia el formulario on");
// }

const form = document.querySelector("#form-prueba");
form.onsubmit = function (event) {
  event.preventDefault();
  console.log("No se envia el formulario query");
};

const enlace = document.querySelector("a");

enlace.onclick = function (event) {
  event.preventDefault();
};

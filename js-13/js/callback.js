// function saludar(nombre) {
//   return "Hola " + nombre;
// }

// saludar("Juan");

// Closures

// function resultado() {
//   let num = 1;

//   const sumaUno = () => {
//     return num + 1;
//   };

//   return sumaUno;
// }

// const funcionSuma = resultado();

// const suma = funcionSuma();

// console.log(suma);

// function mensaje(nombre) {
//   alert("Hola " + nombre);
// }

// const mensajeAlert = (nombre) => alert("Hola " + nombre);
// const mensajeConsole = (nombre) => console.log("Hola " + nombre);

// function mensaje(nombre, callback) {
//   callback("Hola " + nombre);
// }

// const mensaje = function (nombre, callback) {
//   callback("Hola " + nombre);
// };

function saludar(texto) {
  document.write(texto);
}

const mensaje = (nombre, callback) => callback("Hola " + nombre);

// mensaje("Juan", alert);
mensaje("Juan", console.log);

mensaje("Juan", saludar);

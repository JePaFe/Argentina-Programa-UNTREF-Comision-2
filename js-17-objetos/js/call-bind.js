// function saludar() {
//   console.log(`Hola ${this.nombre}`);
// }

// const persona = {
//   nombre: "Juan",
//   saludar: saludar,
// };

// persona.saludar();

// const otraPersona = {
//   nombre: "Maria",
// };

// saludar.call(otraPersona);

// ---

// const miObjeto = {
//   nombre: "Juan",
//   saludar() {
//     console.log("Hola " + this.nombre);
//   },
// };

// miObjeto.saludar();

// ---

let persona = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompleto() {
    setTimeout(
      function () {
        console.log(this.nombre + " " + this.apellido);
      }.bind(this),
      1000
    );
  },
};

persona.nombreCompleto();

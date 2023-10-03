const persona = {
  nombre: "Juan",
  apellido: "Perez",
  dni: 98765432,
  admin: true,
  nombreCompleto() {
    console.log("Nombre Completo");
  },
};

const persona2 = {
  nombre: "Maria",
  apellido: "Garcia",
  dni: 23456789,
};

// console.log(persona.nombre);
// console.log(persona["apellido"]);

// for (const key in persona) {
//   console.log(key, persona[key]);
// }

persona.nombreCompleto();

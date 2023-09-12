// const numeros = [4, 1, 6, 9];

// const nums = numeros.map(function (numero) {
//   return numero * 3;
// });

// ---

const usuarios = [
  {
    nombre: "Juan",
    email: "juan@email.com",
    admin: true,
  },
  {
    nombre: "Ana",
    email: "ana@email.com",
    admin: false,
  },
  {
    nombre: "Maria",
    email: "maria@email.com",
    admin: true,
  },
  {
    nombre: "Pedro",
    email: "pedro@email.com",
    admin: false,
  },
];

// const nombreUsuarios = usuarios.map(function (usuario) {
//   return usuario.nombre;
// });

const nombreUsuarios = usuarios.map((usuario) => usuario.nombre);

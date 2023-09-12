// const usuario = {
//   nombre: "Juan",
//   email: "juan@email.com",
//   admin: true,
// };

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

// for (let i = 0; i < usuarios.length; i++) {
//   console.log(usuarios[i].nombre);
// }

// usuarios.forEach(function (usuario) {
//   console.log(usuario.nombre);
// });

// usuarios.forEach((usuario) => console.log(usuario.nombre));

const nombreUsuarios = [];

usuarios.forEach(function (usuario) {
  nombreUsuarios.push(usuario.nombre);
});

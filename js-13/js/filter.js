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

// const admins = [];

// usuarios.forEach(function (usuario) {
//   //   if (usuario.admin == true) {
//   if (usuario.admin) {
//     admins.push(usuario);
//   }
// });

// const admins = usuarios.filter(function (usuario) {
//   return usuario.admin;
//   //   if (usuario.admin == true) {
//   //     return true;
//   //   }

//   //   return false;
// });

const admins = usuarios.filter((usuario) => usuario.admin);

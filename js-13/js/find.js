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

const usuario = usuarios.findLast(function (usuario) {
  return usuario.admin;
  //   return usuario.admin == true;

  //   if (usuario.email == "maria@email.com") {
  //     return true;
  //   }

  //   return false;
});

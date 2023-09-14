// const users = [
//   { id: 1, nombre: "Juan", admin: true },
//   { id: 2, nombre: "Maria", admin: true },
//   { id: 3, nombre: "Pedro", admin: false },
//   { id: 4, nombre: "Ana", admin: false },
// ];

// console.log(users, JSON.stringify(users));

// localStorage.setItem("users", JSON.stringify(users));

// const users = JSON.parse(localStorage.getItem("users"));

// console.log(users);

// ---

let users = localStorage.getItem("users");

if (users == null) {
  users = [
    { id: 1, nombre: "Juan", admin: true },
    { id: 2, nombre: "Maria", admin: true },
    { id: 3, nombre: "Lorem ipsum dolor sit amet consectetur", admin: false },
    { id: 4, nombre: "Ana", admin: false },
  ];

  localStorage.setItem("users", JSON.stringify(users));
}

users = JSON.parse(localStorage.getItem("users"));

console.log("Los datos ya existen", users[0].nombre);

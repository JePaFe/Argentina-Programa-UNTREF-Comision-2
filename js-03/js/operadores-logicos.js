// console.log(7 > 6 && 4 < 9); // true
//           true && true

// console.log(5 > 6 && 4 < 9); // false
//          false && true

let edad = 11;
let autorizacion = false;

// console.log(edad >= 13 || autorizacion == true); // false
//             false   ||   false

console.log(!true);
console.log(!false);

let admin = false;

if (!admin) {
  console.log("Ir a la pagina de inicio");
} else {
  console.log("Ir a el panel administivo");
}

if (admin == true) {
  console.log("Ir a el panel administivo");
} else {
  console.log("Ir a la pagina de inicio");
}

// ---

let pais = "Argentina";

if (user_pais != pais) {
  console.log("Puede ver el contenido");
} else {
  console.log("El contenido no esta disponible en su pais");
}

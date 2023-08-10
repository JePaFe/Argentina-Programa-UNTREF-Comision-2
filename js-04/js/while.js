// let i = 1;

// while (i < 3) { // i = 3
//   console.log(i);
//   i++;
// }

// let opcion = prompt("Ingrese una opcion: (0 para salir)");

// while (opcion != 0) {
//   console.log(opcion);

//   opcion = prompt("Ingrese una opcion: (0 para salir)");
// }

let opcion;

do {
  opcion = prompt("Ingrese 1, 2 o 3 para continuar, otro numero para salir");
  console.log(opcion);
} while (opcion >= 1 && opcion <= 3);

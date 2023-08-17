// const min = 1;
// const max = 100;

// let num = Math.floor(Math.random() * (max - min + 1) + min);

// console.log(num);

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// let intentos = 3;

let numeroMaquina = numeroAleatorio(1, 100);

// let numeroUsuario = parseInt(prompt("Ingrese un numero: "));

// while (intentos > 0) {
//   console.log(intentos, numeroMaquina, numeroUsuario);
//   intentos--;

//   if (numeroUsuario == numeroMaquina) {
//     console.log("Felicitaciones");
//     break;
//   } else if (numeroUsuario > numeroMaquina) {
//     console.log("Su numero es mayor");
//   } else {
//     console.log("El numero es menor");
//   }

//   numeroUsuario = parseInt(prompt("Ingrese un numero: "));
// }

let intentosUsuario = 0;

while (true) {
  let numeroUsuario = parseInt(prompt("Ingrese un numero: "));

  //   if (isNaN(numeroUsuario)) {
  if (typeof numeroUsuario != "number") {
    //   if (!numeroUsuario) {
    console.log("Por favor ingresar un numero");
    continue;
  }

  intentosUsuario++;
  //   ++intentosUsuario;
  //   intentosUsuario += 1;
  //   intentosUsuario = intentosUsuario + 1;

  console.log(intentosUsuario, numeroMaquina, numeroUsuario);

  if (numeroUsuario == numeroMaquina) {
    console.log("Felicitaciones adivinaste en el intento: " + intentosUsuario);
    break;
  } else if (numeroUsuario > numeroMaquina) {
    console.log("Su numero es mayor");
  } else {
    console.log("El numero es menor");
  }
}

// let numeroUsuario;

// do {
//   numeroUsuario = parseInt(prompt("Ingrese un numero: "));

//   console.log(numeroMaquina, numeroUsuario);

//   if (numeroUsuario == numeroMaquina) {
//     console.log("Felicitaciones");
//   } else if (numeroUsuario > numeroMaquina) {
//     console.log("Su numero es mayor");
//   } else {
//     console.log("El numero es menor");
//   }
// } while (numeroMaquina != numeroUsuario);

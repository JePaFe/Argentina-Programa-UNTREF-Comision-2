// function sumar(num1, num2) {
//   return num1 + num2;
// }

// const sumar = function (num1, num2) {
//   return num1 + num2;
// };

// const sumar = (num1, num2) => num1 + num2;

// let suma = sumar(4, 8);

// alert(suma);
// console.log(suma);

// ---

// function sumarAlert(num1, num2) {
//   if (typeof num1 == "number" && typeof num2 == "number") {
//     let suma = num1 + num2;
//     alert(suma);
//   }
// }

// function sumarConsole(num1, num2) {
//   if (typeof num1 == "number" && typeof num2 == "number") {
//     let suma = num1 + num2;
//     console.log(suma);
//   }
// }

// sumarAlert(4, 8);
// sumarConsole(4, 8);

// --

// let min = 500;
// let max = 2000;

// function mensaje(texto) {
//   document.write(texto);
// }

// function sumar(num1, num2, callback) {
//   if (typeof num1 == "number" && typeof num2 == "number") {
//     let suma = num1 + num2;
//     setTimeout(() => {
//       callback(suma);
//     }, Math.floor(Math.random() * (max - min + 1) + min));
//   }
// }

// sumar(4, 8, console.log);
// sumar(4, 8, mensaje);
// sumar(4, 8, alert);

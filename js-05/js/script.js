// function calculadora(num1, num2, operacion) {
//   if (operacion == "sumar") {
//     return num1 + num2;
//   } else if (operacion == "restar") {
//     return num1 - num2;
//   } else {
//     return "Operacion no valida";
//   }

//   //   let resultado;

//   //   switch (operacion) {
//   //     case "sumar":
//   //       resultado = num1 + num2;
//   //       break;
//   //   }

//   //   return resultado;
// }

function restar(num1, num2) {
  return num1 - num2;
}

function sumar(num1, num2) {
  return num1 + num2;
}

function calculadora(num1, num2, operacion) {
  return operacion(num1, num2);
}

let resultado = calculadora(3, 5, sumar);
console.log(resultado);

// console.log(sumar);
// console.log(sumar());

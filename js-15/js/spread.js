// const numeros = [4, 6, 7, 8, 2];

// // const nums = numeros;

// // const nums = numeros.map(numero => numero)

// const nums = [...numeros];

// ---

// const num1 = [1, 2, 3];
// const num2 = [4, 5];

// // const num3 = num1.concat(num2);
// const num3 = [...num1, ...num2];

// ---

// const user = {
//   nombre: "Juan",
//   edad: 33,
// };

// // const usuario = user;

// const usuario = { ...user, apellido: "Perez" };

const numeros = [4, 2, 3];

const sumar = function (a, b, c) {
  return a + b + c;
};

// const result = sumar(numeros[0], numeros[1], numeros[2]);
const result = sumar(...numeros);
console.log(result);

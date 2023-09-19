const numeros = [4, 2, 3];

// const sumar = function (a, b, c) {
//   return a + b + c;
// };

// // const result = sumar(numeros[0], numeros[1], numeros[2]);
// const result = sumar(...numeros);
// console.log(result);

// ---

const cuadradoArray = function (nombre, ...params) {
  //   console.log(nombre, params);
  //   let suma = 0;

  //   for (let i = 0; i < params.length; i++) {
  //     suma += params[i];
  //   }

  //   console.log(suma);

  let suma = params.reduce((acumulador, numero) => {
    return acumulador + numero;
  }, 0);

  console.log(suma);
};

// cuadradoArray(1, 2, 3);
cuadradoArray("Juan", ...numeros, 8);

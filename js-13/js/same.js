const numeros = [10, 4, 1, 20, 6, 9];

const contiene = numeros.some(function (numero) {
  return numero == 1;
});

// const contiene = numeros.includes(4);

console.log(contiene);

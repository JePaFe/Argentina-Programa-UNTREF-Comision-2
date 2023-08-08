let num1;

console.log(num1);

num1 = 3;
console.log(num1, typeof num1);

let nombre = "Juan's";
nombre = 'Marcela "tigresa" Acuña';
console.log(nombre, typeof nombre);

let edad = 14;
let mayorEdad = edad >= 18;
console.log(mayorEdad);

console.log(num1);
num1 = null;
console.log(num1);

// ---

let boxeadora = {
  nombre: 'Marcela "tigresa" Acuña',
  edad: 46,
};

console.log(boxeadora, typeof boxeadora);
console.log(boxeadora.nombre);

// ---

let numeros = [1, 4, 7, 2];

console.log(numeros, typeof numeros);

// ---

let suma = function (a, b) {
  return a + b;
};

resultado = suma(4, 6);
console.log("La suma es: " + resultado);
console.log(suma, typeof suma);

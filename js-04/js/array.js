// Elementos     1     2     3       4
const miArray = [1, "Hola", true, [1, 2, 3]];
// Indice        0     1     2       3

// miArray[0] = 123;

// console.log(miArray[1], miArray[0]);

// console.log(miArray.length);

// ---

const numeros = [5, 3, 12, 10, 20, 30];

// numeros[3] = 8;
numeros.push(8, 1);

// console.log(numeros[4]);
// let num = numeros.pop();
// console.log(numeros, num);

// let num = numeros.shift();
// console.log(numeros, num);

// numeros.unshift(-1, 0);

// let nums = numeros.slice(2, 4);
// console.log(nums);

// const misArrays = miArray.concat(numeros);

// console.log(numeros.join(", "));

// numeros.push(8);

// console.log(numeros.indexOf(8));
// let indice = numeros.indexOf(8);
// console.log(numeros[indice]);

const nombres = ["Juan", "Maria", "Pedro", "Juana", "Pedro"];

// let indice = nombres.findIndex((nombre) => nombre == "Pedro");
// console.log(indice);

// indice = nombres.indexOf("Maria");
// console.log(indice);

function compareFn(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
}

// console.log(numeros.sort(compareFn));
// console.log(nombres.sort());

// console.log(numeros.includes(8));


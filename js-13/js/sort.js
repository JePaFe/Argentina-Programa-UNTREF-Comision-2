const numeros = [10, 4, 1, 20, 6, 9];
const nombres = ["Pedro", "Ana", "Juan", "Maria"];

// function compare(a, b) {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   // a debe ser igual b
//   return 0;
// }

const compare = (a, b) => a - b;

numeros.sort(compare);
// nombres.sort().reverse();
console.log(numeros);
